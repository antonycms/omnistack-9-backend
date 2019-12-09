const { server } = require('./app');

const port = process.env.SERVER_PORT;

function init() {
  server.listen(port);

  console.log(`Server running on port ${port}`);
}

init();
