const express = require('express');
const router = express.Router();
const fs = require('fs');

async function clear_json(){
    fs.writeFileSync(target, clear);
    console.log("Json " + (target).slice(5, -5) + " cleared!")
};

module.exports = {
    clear_json
  };