const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const fs = require('fs');

async function get_users_json() {
    return new Promise(async (resolve) => {
    target = "json/users.json"
    let json_data = await fs.readFileSync(target);
    console.log("json readed!");
    let json_data_parsed = JSON.parse(json_data);
    resolve (json_data_parsed);
    })
};

module.exports = {
    get_users_json
  };

