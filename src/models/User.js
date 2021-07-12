const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING,
  	allowNull: false
  }
});

User.associate = function(models) {
  User.hasMany(models.Comment, { });
  User.belongsToMany(models.User, {through:  'Follow', as: 'following', foreignKey:  'followingId'});
  User.belongsToMany(models.User, {through:  'Follow', as: 'followed', foreignKey:  'followedId' });
}

module.exports = User;
