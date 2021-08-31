function connect_database() {
   var nconf = require('nconf');
   var mysql = require('mysql');
   var mysql_install = require('./install');

   nconf.file('mysql_config', {
      file: 'config/mysql_config.json'
   });

   var connection = mysql.createConnection({
      host: nconf.get('host'),
      user: nconf.get('user'),
      password: nconf.get('password'),
      database: nconf.get('database')
   });
   module.exports.connection = connection;

   connection.connect(function (err, result) {
      if (err) {
         console.log('Error!', err.message, 'Error code:', err.code);
         if (err.code == 'ER_BAD_DB_ERROR') {
            console.log("No database exist!");
            mysql_install.install_database();
         } else {
            console.log("Database ok!")
         }
      } else {
         console.log("Connected!");
      }
   });

}

module.exports = {
   connect_database
};