require('dotenv-save').config();

async function run() {
  // connect to database
  await require('../index');

  //run seeders
  await require('./generate-users-test');
}

module.exports = run();
