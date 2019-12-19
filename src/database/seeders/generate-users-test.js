const User = require('../../app/models/User');

async function run() {

  const data = [
    {
      name: 'Antony Carlos',
      email: 'user@test.com',
    },
    {
      name: 'Luiz Carlos',
      email: 'user2@test.com',
    },
    {
      name: 'Carla Silva',
      email: 'user3@test.com',
    },
    {
      name: 'Lia Santana',
      email: 'user4@test.com',
    },
  ];

  data.forEach(async (user) => await User.create(user));
}

module.exports = run();
