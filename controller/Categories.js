const { Categories } = require('../models');

const createCategories = async (req, res) => {
  const { name } = req.body;
  const create = await Categories.create({ name });
  return res.status(201).json(create);
};

module.exports = { createCategories };