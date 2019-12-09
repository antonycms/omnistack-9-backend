const User = require('../models/User');
const { hash } = require('bcrypt');

class User {
  async store(req, res) {
    const data = req.body;

    let user = await User.findOne({ email: data.email });
    if (user) {
      return res.statu(400).json('user exists');
    }

    const userData = {
      email: data.email,
      name: data.name,
      password: bcrypt.hash(data.password, 8),
    }

    user = await User.create(userData);

    return res.json(user);
  }
}