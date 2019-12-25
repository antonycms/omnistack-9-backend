const Spot = require('../models/Spot');

class SpotController {
  async store(req, res) {
    const data = req.body;
    const host = process.env.SERVER_HOST;
    const { filename: path } = req.file;

    data.thumbnail = `http://${host}/thumbnail/${path}`;
    data.price = data.price || 0;


    const { techs, user, thumbnail, price } = await Spot.create(data);

    return res.json({
      techs,
      user,
      thumbnail,
      price
    });
  }

  async index(req, res) {
    const { id } = req.headers;

    if (!id) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const spots = await Spot.find({ user: id });

    return res.json(spots);
  }
}

module.exports = new SpotController();
