const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const createUsers = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await Users.create({ displayName, email, password, image });
  const jwtConfig = {
    expiresIn: '7m',
    algorithm: 'HS256',
  };
  const jwtToken = jwt.sign({ displayName, email, password, image }, 'segredo', jwtConfig);
  return res.status(201).json({ token: jwtToken });
};
module.exports = { createUsers }; 