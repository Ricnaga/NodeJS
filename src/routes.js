const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('products/:id', ProductController.show)
routes.post('/products', ProductController.store);
routes.put('/products', ProductController.update);
routes.delete('/products', ProductController.destroy);

module.exports = routes;