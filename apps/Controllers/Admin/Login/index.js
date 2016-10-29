var express = require('express');
var router = express.Router();
var config = require('config');

var passwordHelper = require('../../../Helpers/PasswordHelper');
var user_md = require('../../../Models/Users');

router.get('/',function (req,res) {
    // var hash = passwordHelper.hashPass('123456',config.get('pass_key'));
    // console.log('hash: '+ hash);
    //
    // console.log('decode: '+passwordHelper.decodePass(hash,config.get('pass_key')));
    if(req.session.user){
        res.redirect('/admin');
    }
    res.render('admin/login/login',{data:{}});
});

router.post('/',function (req,res) {
    var body = req.body;

    if(body !== 'undefined' && body !== ''){
        if(body.username.trim().length == 0 || body.password.trim().length == 0){
            res.render('admin/login/login',{data:{error: "Please enter username and password."}});
        }else{
            var data = user_md.getUserByUsername(body.username.trim());
            if(data){
                data.then(function (results) {
                    var result = results[0];
                    var decryptPass = passwordHelper.decodePass(result.password,config.get('pass_key'));

                    if(body.password.trim() == decryptPass){
                        req.session.user = result;
                        res.redirect('/admin');
                    }else{
                        res.render('admin/login/login',{data:{error: "Username or password is invalid. Please try again!"}});
                    }
                }).catch(function (error) {
                    res.render('admin/login/login',{data:{error: "Username or password is invalid. Please try again!"}});
                });
            }else{
                res.render('admin/login/login',{data:{error: "Users not exist."}});
            }
        }
    }else{
        res.render('admin/login/login',{data:{error: "Could not transfer form data."}});
    }
});

module.exports = router;