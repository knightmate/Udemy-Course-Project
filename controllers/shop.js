
const Product=require('../models/product');

exports.getProducts = (req, res, next) => {
  
 
   
      
    Product.findAll().then(result=>{

 
      res.render('shop/product-list', {
          
        prods: result,
        pageTitle: 'All Products',
        path: '/products'

      });

    }).catch(err=>console.log(err))

    
  
  }


  exports.getProduct = (req, res, next) => {
    

    const prodId = req.params.id;
      //console.log(req.params);
     
    Product.findAll({
      where:{
       id:prodId
    }
  
  }).then(product=>{

       console.log(product);
      res.render('shop/product-detail', {
        
        product:product[0],
  
        pageTitle: product[0].title,
  
        path: '/products'
      });

    }).catch(err=>{

      console.log(err);
    
    });



  };
     