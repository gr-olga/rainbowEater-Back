'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            user.hasOne(models.tracker)
        }
    }

    user.init({
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false}
    }, {
        sequelize,
        modelName: 'user',
    });
    return user;
};

// npx sequelize-cli model:generate --name product --attributes title:string,description:string,image:string,color:string
// npx sequelize-cli model:generate --name recipe --attributes title:string,description:string,image:string,color:string
// npx sequelize-cli model:generate --name tracker --attributes day:string,color:string