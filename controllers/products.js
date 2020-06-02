const Product = require('../models/product');

 

 
 
exports.getProducts = async (req, res, next) => {

  console.log('into getproducts');

  Product.findAll().then(result=>{

    console.log("data fetched sucessfull");
    return res.render('shop/index', {

      prods: result,
      pageTitle: 'Shop',
      path: '/',


    }); 

  }).catch(err=>console.log(err))
 
    

 
};
