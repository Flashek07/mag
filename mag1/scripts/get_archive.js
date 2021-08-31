const express = require('express');
const router = express.Router();
const recieve_mysql = require('../mysql/recieve.js');
const asyncHandler = require('express-async-handler');

async function get_archive(data_response, target, result) {
  return new Promise(async(resolve, reject) => {
  data_response = "SELECT * FROM archive";
  target = "json/archive.json";
  const recieve_data = await recieve_mysql.recieve_mysql(data_response, target);
  console.log('get archive ok!')
  resolve(recieve_data);
  })
};


module.exports = {
  get_archive
}