const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  await Users.create({ email, password });
  const jwtConfig = {
    expiresIn: '7m',
    algorithm: 'HS256',
  };
  const jwtToken = jwt.sign({ email, password }, 'segredo', jwtConfig);
  return res.status(200).json({ token: jwtToken });
};
module.exports = { createLogin }; 