// Acá nos falta express y el router
const express = require('express');
const router = express.Router();

// Aća nos falta traer el controller
const productController = require('../../controllers/api/productController.js');

// Acá definimos las rutas
/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.list);

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productController.productDetails);

// Acá exportamos el router
module.exports = router;