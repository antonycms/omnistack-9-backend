const User = require('../models/User');
const { compare } = require('bcrypt');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.statu(400).json('user not found');
    }

    const checkPassword = await compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({ error: 'password does not match' });
    }

    return res.json(user);
  }
}

module.exports = new SessionController();
