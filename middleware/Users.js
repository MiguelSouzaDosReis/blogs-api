const messageDisplay = '"displayName" length must be at least 8 characters long';
const messagePassword = '"password" length must be 6 characters long';
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const validDisplayName = async (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) { 
    return res.status(400).json({ message: messageDisplay }); 
  }
next();
};

const validEmail = async (req, res, next) => {
  const { email } = req.body;
  const validationEmail = /\S+@\S+\.\S+/;
  if (!email) { return res.status(400).json({ message: '"email" is required' }); }
  if (!email.match(validationEmail)) { 
    return res.status(400).json({ message: '"email" must be a valid email' }); 
  }
  const findEmail = await Users.findOne({ where: { email } });
  if (findEmail) { return res.status(409).json({ message: 'User already registered' }); }
next();
};

const validPassword = async (req, res, next) => {
  const { password } = req.body;
  if (!password) { return res.status(400).json({ message: '"password" is required' }); }
  if (password.length < 6) { 
    return res.status(400).json({ message: messagePassword }); 
  }
next();
};

const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }
  try {
   jwt.verify(authorization, 'segredo');
 } catch (error) {
  return res.status(401).json({ message: 'Expired or invalid token' }); 
 }
next();
};

module.exports = { validDisplayName, validEmail, validPassword, verifyToken };