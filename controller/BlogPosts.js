const { BlogPosts, Users, PostsCategories } = require('../models');

const createBlogPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.tokenData;

  const findEmail = await Users.findOne({ where: { email } });
  const { dataValues: { id: userId } } = findEmail;

  const create = await BlogPosts.create({ title, content, userId });
  const { dataValues: { id } } = create;
  const ArrayDePromesa = categoryIds.map(((element) =>
    PostsCategories.create({ categoryId: element, postId: id })));
  await Promise.all(ArrayDePromesa);

  return res.status(201).json(create);
};

module.exports = { createBlogPosts };