const express = require('express');
const router = express.Router();
const send_mysql = require('../mysql/send.js');
const asyncHandler = require('express-async-handler');
const {
  get_users
} = require('../scripts/get_user.js');
let {
  get_users_json
} = require('../scripts/get_user_json.js');
let {
  get_events_json
} = require('../scripts/get_event_json.js');
const {
  get_events
} = require('../scripts/get_event.js');


router.post('/', asyncHandler(async (req, res) => {

  let user = await req.body.userslist;
  let user_name = JSON.parse(user).name;
  let item = await req.body.item;
  let assignment = await req.body.assignment;
  let ean = await req.body.ean;
  await get_users();
  await get_users_json();
  await send_event();
  await get_events();
  await get_events_json();

  async function send_event() {
    data_query = "INSERT INTO events (ean, assignment, item, user) VALUES (" + "'" + ean + "','" + assignment + "','" + item + "','" + user_name + "')";
    send_mysql.send_mysql(req, res, data_query);
    (console.log("Event added!"));
    return;
  }

  res.redirect('/event')
  console.log("render!")
  console.log(user + item + assignment + ean)
}));




module.exports = router;