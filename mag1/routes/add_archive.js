const express = require('express');
const router = express.Router();
const send_mysql = require('../mysql/send.js');
const asyncHandler = require('express-async-handler');

const {
  get_archive
} = require('../scripts/get_archive.js');

let {
  get_archive_json
} = require('../scripts/get_archive_json.js');



router.post('/', asyncHandler(async (req, res) => {

  await send_archive()
  await get_archive()
  let json_data = await get_archive_json()
  async function send_archive(){
  console.log(JSON.stringify(req.body.button_archive));
  }
  

  /*async function send_archive() {
    data_query = "INSERT INTO archive (ean, assignment, item, user) VALUES (" + "'" + ean + "','" + assignment + "','" + item + "','" + user + "')";
    send_mysql.send_mysql(req, res, data_query);
    console.log("Archive added: " + JSON.stringify(data));
    return;
  }
  */

  res.redirect('/event')
  console.log("render!")
}));






module.exports = router;