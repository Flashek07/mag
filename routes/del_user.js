const express = require('express');
const router = express.Router();
const send_mysql = require('../mysql/send.js');
const {
  get_users
} = require('../scripts/get_user.js');
const asyncHandler = require('express-async-handler');
let {
  get_users_json
} = require('../scripts/get_user_json.js');



router.post('/', asyncHandler(async (req, res) => {

  let user = await req.body.userslist;
  let user_id = JSON.parse(user).id;
  let user_name = JSON.parse(user).name;
  await send_user()
  await get_users()
  let json_data = await get_users_json()

  async function send_user() {
    data_query = "DELETE FROM users WHERE id ='" + user_id + "'";
    send_mysql.send_mysql(req, res, data_query);
    console.log("User removed: " + user_id);
    return;
  }

  res.render('users', {
    title: 'Users',
    message: 'Removed user: ',
    user: user_name,
    json: json_data
  })
  console.log("render!")
}));


module.exports = router;