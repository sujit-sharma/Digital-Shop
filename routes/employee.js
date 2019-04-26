const express = require('express');
const router = express.Router();

router.get('/employee',(req,res,next) =>{
    res.send('<h1> Your records are as below');
});

module.exports = router;




