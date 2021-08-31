const express = require("express");
const fs = require('fs');

async function recieve_mysql(data_response, target) {
    return new Promise(async(resolve, reject) => {
    const mysql = require("mysql");
    const connection = require("./connect");
    const asyncHandler = require('express-async-handler');

    connection.connection.query(data_response, function (err, data) {
        if (err) {
            console.log('Error!', err.message, 'Error code:', err.code, data_response, data);
            reject (err);
        } else {
            console.log("recieve ok!");
           resolve(fs.writeFileSync(target, JSON.stringify(data)));
        }
    })
})};


module.exports = {
    recieve_mysql
};