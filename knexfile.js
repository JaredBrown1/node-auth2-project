// Update with your config settings.
require("dotenv").config();

const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
  },
};
