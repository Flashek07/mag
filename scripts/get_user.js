const express = require('express');
const router = express.Router();
const recieve_mysql = require('../mysql/recieve.js');
const asyncHandler = require('express-async-handler');

async function get_users(data_response, target, result) {
  return new Promise(async(resolve, reject) => {
  data_response = "SELECT * FROM users";
  target = "json/users.json";
  const recieve_data = await recieve_mysql.recieve_mysql(data_response, target);
  console.log('get users ok!')
  resolve(recieve_data);
  })
};


module.exports = {
  get_users
};