const express = require('express')
const path = require('path') //node native module
const { Restaurant, Menu, Item} = require('./index')
// const {Menu} = require('./models/Menu')
// const {Item} = require('./models/Item')

const app = express()
const port = 3000
app.use(express.json())
//points toward folder of static files
// app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
// app.get('/flipcoin', (req, res) => {
//     let coinflip = Math.floor(Math.random()*2)
//     if (coinflip == 1){
//         coinflip = 'Heads'
//     } else {
//         coinflip = 'Tails'
//     }
//     res.send(coinflip)
// })

//GET method on /restaurants route returns all restaurants








// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>RESTAURANTS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//


app.get('/restaurants', async (req, res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})

app.get('/restaurants/:id', async (req, res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findByPk(req.params.id)
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})

// find a restaurant by its name
app.get('/restaurantName/:name', async (req, res) => {
    const thisRestaurantName = await Restaurant.findOne({ where: { name: req.params.name } })
    res.json(thisRestaurantName)
})

// create new restaurant
app.post('/restaurants', async (req, res) => {
    let newRestaurant = await Restaurant.create(req.body)
    res.send(newRestaurant ? 'New Restaurant Created' : 'Failed To Create New Restaurant')
})

// update an existing restaurant by id  
app.put('/restaurants/:id', async (req, res) => {
    let updatedRestaurant = await Restaurant.update(req.body, {
        where: {id: req.params.id}
    })
    res.send('Updated!')
})










// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>MENUS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//



app.get('/menus', async (req, res) => {
    const allMenus = await Menu.findAll()
    res.json(allMenus)
})

app.get('/menus/:id', async (req, res) => {
    const allMenus = await Menu.findByPk(req.params.id)
    res.json(allMenus)
})
app.get('/menus-of-type/:type', async (req, res) => {
    const menuOfType = await Menu.findAll({where: {type: req.params.type}})
    res.json(menuOfType)
})
app.post('/menus', async (req, res) => {
    let newMenu = await Menu.create(req.body)
    res.send( newMenu ? 'New Menu Created' : 'Failed To Create New Menu')
})
app.put('menus/:name', async (req, res) => {
    let updatedMenu = await Menu.update(req.body, {
        where: {name: req.name}})
    res.send(updatedMenu ? "Menu Updated" : "Menu Not Updated")
})




















// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>MENU ITEMS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//



app.get('/items', async (req, res) => {
    const allItems = await Item.findAll()
    res.json(allItems)
})
// app.get('items_by_resta')

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
app.post('/items', async (req, res) => {
    let newItem = await Item.create(req.body)
    res.send(newItem ? "New Menu Item Created" : "Failed To Create New Menu Item")
})
app.put('/items/:name', async (req, res) => {
    let updatedItem = await Item.update(req.body, {
        where: {name: req.body.name}})
        res.send(updatedItem ? "Menu Item Updated" : "Menu Item Not Updated");
})