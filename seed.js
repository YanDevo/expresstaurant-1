const {sequelize} = require('./db')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Restaurant, Menu, Item} = require('./index')


//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    name: 'Sandy Sahara',
    location: 'Sahara',
    cuisine: 'Desert'
  },
  {
    name: 'Yannick\s Hotpot spot',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    name: 'Space Grill',
    location: 'The Moon',
    cuisine: 'Lunar'
  }
]

const seedMenu = [
  {
    title: 'Sunshine',
    RestaurantId : 1,
    type: 'breakfast'
  },
  {
    title: 'Heat of the Day',
    RestaurantId : 1,
    type: 'lunch'
  },
  {
    title: 'EarthRise',
    RestaurantId : 3,
    type: 'breakfast'
  },
  {
    title: 'Day-is-Night',
    RestaurantId : 3,
    type: 'lunch'
  },
  {
    title: 'Dallas Mornings',
    RestaurantId : 2,
    type: 'breakfast'
  },
  {
    title: 'Lunch Traffic',
    RestaurantId : 2,
    type: 'lunch'
  },
]

const seedItem = [
  {
    name: 'bhindi masala',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: true,
    MenuId : 6,
  },
  {
    name: 'egusi soup',
    image: 'someimage.jpg',
    price: 10.50,
    vegetarian: false,
    MenuId : 6,
  },
  {
    name: 'ham sandwich',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: false,
    MenuId : 4,
  },
  {
    name: 'kale chips',
    image: 'someimage.jpg',
    price: 2.50,
    vegetarian: true,
    MenuId : 2,
  },
  {
    name: 'lamb curry',
    image: 'someimage.jpg',
    price: 11.50,
    vegetarian: false,
    MenuId : 4
  },
  {
    name: 'grilled salmon',
    image: 'someimage.jpg',
    price: 16.50,
    vegetarian: false,
    MenuId : 2
  },
  {
    name: 'spinach omlet',
    image: 'someimage.jpg',
    price: 5.50,
    vegetarian: false,
    MenuId : 1,
  },
  {
    name: 'veggie wrap',
    image: 'someimage.jpg',
    price: 10.50,
    vegetarian: true,
    MenuId : 1,
  },
  {
    name: 'almond joy pancakes',
    image: 'someimage.jpg',
    price: 7.50,
    vegetarian: true,
    MenuId : 3,
  },
  {
    name: 'pepper pot',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: false,
    MenuId : 6
  },
  {
    name: 'smoked leg quarters',
    image: 'someimage.jpg',
    price: 15.50,
    vegetarian: false,
    MenuId : 4,
  },
  {
    name: 'ham and chheese',
    image: 'someimage.jpg',
    price: 3.50,
    vegetarian: false,
    MenuId : 5,
  },
  {
    name: 'veggie burger',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: true,
    MenuId : 2,
  },
  {
    name: 'chef\'s special',
    image: 'someimage.jpg',
    price: 22.50,
    vegetarian: false,
    MenuId : 4,
  },
  {
    name: 'spicy thai fried rice',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: false,
    MenuId : 6,
  },
  {
    name: 'basil fried rice',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: false,
    MenuId : 2,
  },
  {
    name: 'lamb ka-bobs',
    image: 'someimage.jpg',
    price: 13.50,
    vegetarian: false,
    MenuId : 2,
  },
  {
    name: 'mean green juice',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: true,
    MenuId : 1,
  },
  {
    name: 'veggie breakfast you can only get on the moon',
    image: 'someimage.jpg',
    price: 65.50,
    vegetarian: true,
    MenuId : 3,
  }

]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })