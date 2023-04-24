const express=require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('../util/pathpage');
router.get('/addProduct',(req,res,next)=>
{
console.log('In another middleware');
res.sendFile(path.join(rootDir,'views','addProduct.html'));
});
router.post('/addProduct',(req,res,next)=>
{
    
console.log(req.body);
//res.send('<h1>Hello from express.js</h1>');
res.redirect('/');
});
router.use('/',(req,res,next)=>
{
res.send("Page not found");
//res.send('<h1>Hello from express.js</h1>');
//res.redirect('/');

});

module.exports=router;