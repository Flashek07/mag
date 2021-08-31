const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {
  get_users
} = require('../scripts/get_user.js');
let {
  get_users_json
} = require('../scripts/get_user_json.js');


/* GET users listing. */
router.get('/', asyncHandler(async (req, res) => {
  let promise_get_user = get_users();
  promise_get_user.then(async (result) => {
    let json_data = await get_users_json();
    res.render('users', {
      title: 'Users',
      json: json_data
    })
  });
}));

module.exports = router;