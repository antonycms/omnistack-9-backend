const Yup = require('yup');

module.exports = async (req, res, next) => {
  const data = req.body;

  data.techs = data.techs.split(',');

  data.file = req.file;

  const schema = Yup.object().shape({
    price: Yup.number(),
    techs: Yup.array().required(),
    user: Yup.string().required(),
  });

  try {
    await schema.validate(data, { abortEarly: false });

    return next();
  } catch (err) {
    return res.status(400).json({ error: 'validation fails', message: err.inner });
  }
};
