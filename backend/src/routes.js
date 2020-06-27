const {Router} = require('express');
const clientController = require('./Controllers/clientController');
const routes = Router();
const restaurantController = require('./Controllers/restaurantController');
const foodController = require('./Controllers/foodController')



//users
routes.post('/clientsCreate', clientController.create);
routes.post('/clientsUpdate', clientController.update);
routes.post('/login', clientController.login);
routes.get('/searchFood');
routes.get('/searchRest');
routes.get('/filterByCateg')
routes.get('/filterOrders');
routes.get('/clients/:id', clientController.index);



//restaurant
routes.post('/restaurantCreate', restaurantController.create);
routes.post('/foodCreate');
routes.get('/restaurants', restaurantController.index);
routes.get('/categorias', restaurantController.categs);
routes.get('/restaurants/:id', restaurantController.searchBycateg);
routes.get('/rel1');
routes.get('/rel2');
routes.get('/rel3');

//foods
routes.post('/foodCreate', foodController.foodCreate);
routes.post('/foodUpdate', foodController.updateFood);
routes.delete('/foodDelete', foodController.deleteFood);


//restaurantController.makeTableCateg();

module.exports = routes;