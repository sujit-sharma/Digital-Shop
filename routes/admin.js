const express = require('express');
const path = require('path');
const rootDir = require('../util/path');


const router = express.Router();

router.use('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootDir,'routes','views','add-product.html'));
    //res.send('<form action ="/product" method = "POST"> <input type = "text" name = "title" <button type ="submit">Add Product</button></form>');

});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    //res.send('<h3> Thank you </h3>');
});
module.exports = router;
 