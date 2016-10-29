var express = require('express');
var router = express.Router();
var config = require('config');

router.get('/',function (req,res) {
    if(!req.session.user){
        res.redirect('/admin/login');
    }else{
        res.render('admin/dashboard',{data:{}});
    }
});

module.exports = router;