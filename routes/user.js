const express = require('express');
const router = express.Router();

router.get('/user',(req,res,next) => {
    res.send('<h3> Welcome to all users</h3>');
});

module.exports = router;