const {sequelize} = require('../db');
const {DataTypes, Model} = require('sequelize')

class Menu extends Model{}

Menu.init({
    title: DataTypes.String
},
    {sequelize,
     timestamps: false

    })

    module.exports = {Menu};


    