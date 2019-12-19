require('dotenv-save').config();
const Express = require('express');
const Cors = require('cors');

const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = Express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Express.json());
    this.server.use(Cors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App();
