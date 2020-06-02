const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');
const shopController=require('../controllers/shop');

const router = express.Router();

 router.get('/', productsController.getProducts);
 
router.get('/products', shopController.getProducts);

router.get('/products/:id', shopController.getProduct);


module.exports = router;
     