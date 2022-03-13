module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostsCategories.associate = (models) => {
    PostsCategories.belongsTo(models.Categories,
      { foreignKey: 'categoryId', as: 'categories' });
  };

  return PostsCategories;
};