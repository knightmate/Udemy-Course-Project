const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {



    let { title, price, quantiy, description } = req.body;
  
    // const product = new Product(title, price, quantiy, description);
  
  
  
  
    console.log(req.body);
     
  
  
    Product.create({
      
      title: title,
      price: price,
      imageUrl: "/image",
      description:description
  
    }).then(data => {
  
      console.log('got sucessfull', data);
  
    }).catch(err => console.log(err))
  
    res.redirect('/');
   
  };
exports.getProducts = (req, res, next) => {
    Product.findAll().then(products=>{
        
            res.render('admin/products', {
              prods: products,
              pageTitle: 'Admin Products',
              path: '/admin/products'
            });
     

    }).catch(err=>console.log(err));
  };

  exports.getAddProduct = (req, res, next) => {


    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false
    });
  
  
  };