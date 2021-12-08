const {sequelize, DataTypes, Model} = require ('./db')

// import models
const {Restaurant} = require('./models/Restaurant')
const {Menu} = require('./models/Menu')
const {Item} = require('./models/Item')

// associate models 


// this adds foreign key to menu connecting a
//  menu instance to a specific restaurant
Menu.belongsTo(Restaurant) 


// This adds foreign key to item connecting a
//  item instance to a specific menu
Item.belongsTo(Menu)


// gives sequelize methods for a one to many relationship
Restaurant.hasMany(Menu)
Menu.hasMany(Item)


module.exports = {Restaurant, Menu, Item}
