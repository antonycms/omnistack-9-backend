const Yup = require('yup');

module.exports = async (req, res, next) => {
  const data = req.body;

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  try {
    await schema.validate(data, { abortEarly: false });

    return next();
  } catch (err) {
    return res.status(400).json({ error: 'validation fails', message: err.inner });
  }
};