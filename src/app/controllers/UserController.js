const User = require('../models/User');

class UserController {
  async store(req, res) {
    const data = req.body;

    let user = await User.findOne({ email: data.email });
    if (!user) {
      user = await User.create(data);
    }

    const { email, _id: id } = user;

    return res.json({
      email,
      id,
    });
  }
}

module.exports = new UserController();