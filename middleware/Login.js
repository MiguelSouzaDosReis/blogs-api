const { Users } = require('../models');

const emptyEmail = '"email" is not allowed to be empty';
const emptyPassword = '"password" is not allowed to be empty';

const validEmailLogin = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') { return res.status(400).json({ message: emptyEmail }); }
  if (!email) { return res.status(400).json({ message: '"email" is required' }); }
  const findEmail = await Users.findOne({ where: { email } });
  if (!findEmail) { return res.status(400).json({ message: 'Invalid fields' }); }
next();
};
const validPasswordLogin = async (req, res, next) => {
  const { password } = req.body;
  if (password === '') { return res.status(400).json({ message: emptyPassword }); }
  if (!password) { return res.status(400).json({ message: '"password" is required' }); }
next();
};

module.exports = { validEmailLogin, validPasswordLogin };