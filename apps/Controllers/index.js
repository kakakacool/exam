var express = require('express');
var router = express.Router();

router.use('/admin',require(__dirname + '/Admin/admin'));
router.use('/admin/login',require(__dirname + '/Admin/Login'));
router.use('/admin/subject',require(__dirname + '/Admin/Subject'));

router.get('/',function (req,res) {
    res.json({'message':'this is homepage'});
    // res.render('test');
});

module.exports = router;