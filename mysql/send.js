const express = require("express");

async function send_mysql(req, res, data_query) {
    return new Promise((resolve, reject) => {
    const mysql = require("mysql");
    const connection = require("./connect");
    const asyncHandler = require('express-async-handler');
    let result;

    connection.connection.query(data_query, function (err, results) {
        if (err) {
            console.log('Error!', err.message, 'Error code:', err.code, data_query);
            reject (err);
        } else {
           result = JSON.stringify(results.affectedRows);
            resolve(console.log("send ok! " + result));
        }
    })
})};


module.exports = {
    send_mysql
};