const JWT = require('jsonwebtoken');
const { promisify } = require('util');

async function checkToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ error: 'token is not provided' });
  }

  const [, token] = authHeader.split(' ');
  const secretKey = process.env.SECRET_KEY;

  try {
    const decoded = await promisify(JWT.verify)(token, secretKey);
    req.userId = decoded.id;
    req.provider = decoded.provider;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

module.exports = checkToken;
