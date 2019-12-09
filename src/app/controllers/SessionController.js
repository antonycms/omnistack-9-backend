const User = require('../models/User');

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json('email invalid');
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.statu(400).json('user not found');
    }

    return res.json(user);
  }
}

module.exports = new SessionController();
