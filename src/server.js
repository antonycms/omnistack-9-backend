const { server } = require('./app');

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

function init() {
  server.listen(PORT, HOST);

  console.log(`Server running on http://${HOST}:${PORT}/`);
}

init();
