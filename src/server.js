const { server } = require('./app');

const PORT = process.env.PORT || 3333;

function init() {
  server.listen(PORT);

  console.log(`Server running on PORT ${PORT}`);
}

init();
