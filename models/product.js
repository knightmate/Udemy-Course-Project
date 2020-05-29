 const products=[];
 const fs=require('fs');
 const path=require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
         
          
         console.log(this);
         let product=[];
         product.push(this);
        
      fs.writeFile(path.join(__dirname,'../data/product.json'),JSON.stringify(product) ,function(err){
         
        if(err)
        console.log(err);

      });
     
    }
      
    static fetchAll(cb) {

      fs.readFile(path.join(__dirname,'../data/product.json'), function(err,fileContent){

        if(err)
        cb([]);
        else{

         
          if(fileContent.toString().length>0)
          {
            cb( JSON.parse(fileContent) );
          }else 
           cb([]);
      

        
        }
     
      });
      

    }
 

}

