const mongoose = require('mongoose');


const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASSWORD;
const database = process.env.MONGO_DATABASE;

// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]
const uri = `mongodb://${user}:${pass}@${host}:${port}/${database}`;

class Database {
  constructor() {
    this.connection = mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }
}

module.exports = new Database().connection;
