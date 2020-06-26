const {Router} = require('express');
const clientController = require('./Controllers/clientController');
const routes = Router();
const restaurantController = require('./Controllers/restaurantController');



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
<<<<<<< HEAD
routes.post('/foodCreate');
routes.get('/restaurants', restaurantController.index);
=======
routes.post('/foodCreate', restaurantController.foodCreate);
>>>>>>> 7340943d5ad3d2e62cafb4632e109beec3afa806
routes.get('/categorias', restaurantController.categs);
routes.get('/rel1');
routes.get('/rel2');
routes.get('/rel3');

//restaurantController.makeTableCateg();

module.exports = routes;