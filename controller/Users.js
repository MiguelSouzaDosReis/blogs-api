const notExist = 'User does not exist';
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

const everthingUsers = async (_req, res) => {
  const everthing = await Users.findAll();
  return res.status(200).json(everthing);
};

const everthingIdUsers = async (req, res) => {
  const { id } = req.params;
  const everthingId = await Users.findOne({ where: { id } });
  if (everthingId === null) { return res.status(404).json({ message: notExist }); }
  res.status(200).json(everthingId); 
};
module.exports = { createUsers, everthingUsers, everthingIdUsers }; 