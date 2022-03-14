const { Categories } = require('../models');

const createCategories = async (req, res) => {
  const { name } = req.body;
  const create = await Categories.create({ name });
  return res.status(201).json(create);
};

const everthingCategories = async (_req, res) => {
  const everthing = await Categories.findAll();
  return res.status(200).json(everthing);
};

module.exports = { createCategories, everthingCategories };