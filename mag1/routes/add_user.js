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

  let user = await req.body.username;
  await send_user()
  await get_users()
  let json_data = await get_users_json()

  async function send_user() {
    data_query = "INSERT INTO users (name) SELECT '" + user + "' FROM DUAL WHERE NOT EXISTS (SELECT name FROM users WHERE name='" + user + "')";
    send_mysql.send_mysql(req, res, data_query);
    (console.log("User added: " + req.body.username));
    return;
  }

  res.render('users', {
    title: 'Users',
    message: 'Added user: ',
    user: user,
    json: json_data
  })
  console.log("render!")
}));






module.exports = router;