require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASS,
    "database": process.env.PG_DB,
    "host": process.env.PG_HOST || "127.0.0.1",
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
