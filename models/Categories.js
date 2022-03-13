module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });
  Categories.associate = (models) => {
    Categories.hasOne(models.PostsCategories,
      { foreignKey: 'categoryId', as: 'postscategories' });
  };

  return Categories;
};