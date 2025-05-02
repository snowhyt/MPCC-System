const path = require('path');


//dotenv config where the path to locate .env is indicated
require('dotenv').config({path: path.resolve(__dirname,'../../.env')});


module.exports = {
  "development": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASS || "mypassword",
    "database": process.env.PG_DB,
    "host":"localhost",
    "dialect": "postgres",
    "port": process.env.PG_PORT || 5432,
  
  }
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
//
 }
