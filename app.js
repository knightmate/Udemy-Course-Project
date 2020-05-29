const express=require('express');
const port=1200;
const app=express.Router();


 
 app.listen(port, function(){

    console.log('server is listening on ', port);
 
 })
 