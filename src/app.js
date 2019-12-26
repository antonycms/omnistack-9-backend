require('dotenv-save').config();

const Express = require('express');
const Cors = require('cors');
const { resolve } = require('path');

const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = Express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(Cors());
    this.server.use(Express.json());
    this.server.use('/thumbnail', Express.static(resolve(__dirname, '..', 'tmp', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App();
