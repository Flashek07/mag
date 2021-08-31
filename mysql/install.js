function install_database() {
    const nconf = require('nconf');
    const mysql = require('mysql');
    const mysql_connect = require('./connect')

    nconf.file('mysql_config', {
        file: 'config/mysql_config.json'
    });

    const connection = mysql.createConnection({
        host: nconf.get('host'),
        user: nconf.get('user'),
        password: nconf.get('password'),
        multipleStatements: true
    });

    connection.connect(function (err) {
        if (err) {
            console.log('Error!', err.message, 'Error code:', err.code);
        } else {
            console.log("Creating database...");
            const structure_users = "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
            const structure_events = "CREATE TABLE events (date DATETIME DEFAULT current_timestamp PRIMARY KEY, item VARCHAR(255), assignment VARCHAR(255), ean VARCHAR(255), user VARCHAR(255))";
            const structure_archive = "CREATE TABLE archive (archive_date DATETIME DEFAULT current_timestamp PRIMARY KEY, date VARCHAR(255), item VARCHAR(255), assignment VARCHAR(255), ean VARCHAR(255), user VARCHAR(255))";
            const database = "CREATE DATABASE " +
                nconf.get('database') + ";" +
                "USE " + nconf.get('database') + ";" +
                structure_users + ";" +
                structure_events + ";" +
                structure_archive;

            connection.query(database, function (err) {
                if (err) {
                    console.log('Error!', err.message, 'Error code:', err.code, database);
                } else {
                    console.log("Database mag created!");
                    mysql_connect.connect_database();

                }
            })
        }
    });

}


module.exports = {
    install_database
};