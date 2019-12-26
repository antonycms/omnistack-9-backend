const Spot = require('../models/Spot');

class DashboardController {
  async index(req, res) {
    const { id } = req.headers;

    if (!id) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const spots = await Spot.find({ user: id });

    return res.json(spots);
  }
}

module.exports = new DashboardController();
