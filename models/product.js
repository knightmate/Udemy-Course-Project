 const Sequilize=require('sequelize');
 const sequelize=require('../util/database');


 const product=sequelize.define('product', {

  id:{
    type:Sequilize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
  },
  title:Sequilize.STRING,

  price:{
    type:Sequilize.DOUBLE,
    allowNull:false,
  },

  imageUrl:{
    type:Sequilize.STRING,
    allowNull:false,
  },
  description:{
    type:Sequilize.STRING,
    allowNull:false,
  }


 });

 

 module.exports=product;
 
  
