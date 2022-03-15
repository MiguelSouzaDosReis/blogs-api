const { BlogPosts, Users, PostsCategories, Categories } = require('../models');

const createBlogPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.tokenData;

  const findEmail = await Users.findOne({ where: { email } });
  const { dataValues: { id: userId } } = findEmail;

  const create = await BlogPosts.create({ title, content, userId });
  const { dataValues: { id } } = create;
  const ArrayOfPromise = categoryIds.map(((element) =>
    PostsCategories.create({ categoryId: element, postId: id })));
  await Promise.all(ArrayOfPromise);

  return res.status(201).json(create);
};

const everthingBlogPosts = async (_req, res) => {
  const modelCategories = { model: Categories, as: 'categories', through: { attributes: [] } };
  const modelUsers = { model: Users, as: 'user' };
  const everthing = await BlogPosts.findAll({ include: [modelUsers, modelCategories] });

  return res.status(200).json(everthing);
};

module.exports = { createBlogPosts, everthingBlogPosts };