const express = require('express');
const route = express.Router();

route.get('/',(req,res,next) =>{
    res.send('<h1> welcome to system admistration </h1><form action ="/product" method = "POST"> <input type = "text" name = "title" <button type ="submit">send</button></form>');

});
route.post('/admin',(req,res,next) => {
    res.send('<h3> You filled form </h3>');
});



module.exports = route;