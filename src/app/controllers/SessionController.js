const User = require('../models/User');

class SessionController {
  async store(req, res) {
    const data = req.body;

    let user = await User.findOne({ email: data.email });
    if (!user) {
      user = await User.create(data);
    }

    const { _id: id } = user;

    return res.json({
      id,
    });
  }
}

module.exports = new SessionController();
