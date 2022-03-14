const { Categories } = require('../models');

const validCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
    if (!categoryIds) { return res.status(400).json({ message: '"categoryIds" is required' }); }
  const findAllCategoryid = await Categories.findAll();
  const arrayId = findAllCategoryid.map((element) => element.id);
  const boolenArray = categoryIds.every((element) => arrayId.includes(element));
  if (!boolenArray) { return res.status(400).json({ message: '"categoryIds" not found' }); }
next();
};

const validTitle = async (req, res, next) => {
  const { title } = req.body;
    if (!title) { return res.status(400).json({ message: '"title" is required' }); }
   next();
};

const validContent = async (req, res, next) => {
  const { content } = req.body;
    if (!content) { return res.status(400).json({ message: '"content" is required' }); }
   next();
};

module.exports = { validCategoryIds, validTitle, validContent };