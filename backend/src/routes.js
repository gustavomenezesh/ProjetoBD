const {Router} = require('express');
const clientController = require('./Controllers/clientController');
const routes = Router();
const restaurantController = require('./Controllers/restaurantController');
const foodController = require('./Controllers/foodController')

//users
routes.post('/clientsCreate', clientController.create);
routes.post('/clientsUpdate', clientController.update);
routes.post('/login', clientController.login);
routes.post('/doOrder', clientController.do_order);
routes.get('/filterOrders', clientController.filterOrders);
routes.get('/user/:id', clientController.findUser);



//restaurant
routes.post('/restaurantCreate', restaurantController.create);
routes.get('/restaurants', restaurantController.index);
routes.get('/delivery', restaurantController.delivery);
routes.get('/populars', restaurantController.popular);
routes.get('/maisPedidos', restaurantController.maisPedidos);
routes.get('/categs/:id', restaurantController.searchBycateg);
routes.get('/restaurants/:id', restaurantController.getbyId);
routes.get('/restaurantsByName', restaurantController.searchByName);
routes.get('/promotion', restaurantController.promotion);
routes.get('/rel1', restaurantController.rel1);
routes.get('/rel2', restaurantController.rel2);
routes.get('/rel3', restaurantController.rel3);
routes.get('/teste', restaurantController.teste);

//foods
routes.post('/foodCreate', foodController.foodCreate);
routes.post('/foodUpdate', foodController.updateFood);
routes.delete('/foodDelete', foodController.deleteFood);
routes.get('/searchFood', foodController.searchFood);
routes.get('/menu', foodController.menu);


//categorias
routes.get('/categs', restaurantController.categs);


module.exports = routes;