const {Router} = require('express');
const clientController = require('./Controllers/clientController');
const routes = Router();
const restaurantController = require('./Controllers/restaurantController');

//users
routes.post('/clientsCreate', clientController.create);
routes.post('/clientsUpdate', clientController.update);
routes.get('/login', clientController.login);
routes.get('/searchFood');
routes.get('/searchRest');
routes.get('/filterByCateg')
routes.get('/filterOrders');



//restaurant
routes.post('/restaurantCreate', restaurantController.create);
routes.post('/foodCreate');
routes.get('/rel1');
routes.get('/rel2');
routes.get('/rel3');



module.exports = routes;