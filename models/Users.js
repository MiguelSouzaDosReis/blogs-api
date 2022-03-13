module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });
  Users.associate = (models) => {
    Users.hasOne(models.BlogPosts,
      { foreignKey: 'userId', as: 'blogposts' });
  };

  return Users;
};