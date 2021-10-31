module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("item", {
      name:{
        type: Sequelize.STRING,
      },
      image:{
        type: Sequelize.STRING,
      }
    });
  
    return User;
  };
  