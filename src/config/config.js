module.exports = {
  development: {
    username: "root",
    password: null,
    database: "doctorcare",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    query: {
      raw: true,
    },
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
