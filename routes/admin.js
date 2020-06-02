const path = require('path');

const express = require('express');

const admin= require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/products', admin.getProducts);

// /admin/add-product => POST
 router.get('/add-product', admin.getAddProduct);

 router.post('/add-product', admin.postAddProduct)

module.exports = router;
    