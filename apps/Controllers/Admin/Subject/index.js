var express = require('express');
var router = express.Router();
var config = require('config');
var moment = require('moment');

var subject_md = require('../../../Models/Subjects');

router.get('/',function (req,res) {
    if(!req.session.user){
        res.redirect('/admin/login');
    }else{
        var subject_data = subject_md.getAllSubject();
        subject_data.then(function (subjects) {
            var data = {
                subjects: subjects,
                error: false
            };
            res.render('admin/subject',{data:data, moment: moment});

        }).catch(function (err) {
            res.render('admin/subject',{data:{error: true}});
        });
    }
});

router.get('/add',function (req,res) {
    if(!req.session.user){
        res.redirect('/admin/login');
    }else{
        res.render('admin/subject/add',{data:{}});
    }
});

router.post('/add',function (req,res) {
    if(!req.session.user){
        res.redirect('/admin/login');
    }else{
        var body = req.body;

        if(body.subject_name.trim().length == 0){
            res.render('admin/subject/add',{data:{error: "Subject can not be blank."}});
        }else{
            var fields = {name: body.subject_name, created: new Date(), updated: new Date()};
            var data = subject_md.addSubject(fields);
            if(data){
                data.then(function (result) {
                    res.redirect('/admin/subject');
                }).catch(function (err) {
                    res.render('admin/subject/add',{data:{error: "Could not save the Subjects. Please try agian!"}});
                });
            }
        }
    }
});

router.get('/edit/:id',function (req, res) {
    if(!req.session.user){
        res.redirect('/admin/login');
    }else{
        var id = req.params.id;
        var subject_data = subject_md.getSubjectById(id);
        if(subject_data){
            subject_data.then(function (subjects) {
                var data = {
                    subjects: subjects[0],
                    error: false
                };
                res.render('admin/subject/edit',{data:data});

            }).catch(function (err) {
                res.render('admin/subject',{data:{error: "This subject does not exist."}});
            });
        }else {
            res.render('admin/subject',{data:{error: "This subject does not exist."}});
        }
    }
});

router.post('/edit/:id',function (req, res) {
    var self_url = 'admin/subject/edit';
   if(!req.session.user){
       res.redirect('/admin/login');
   } else{
       var body = req.body;
       var subject_data = subject_md.updateSubjectById([body.subject_name, new Date()], body.subject_id);
       if(subject_data){
            subject_data.then(function (subjects) {
                var data = subject_md.getSubjectById(body.subject_id);
                if(data){
                    data.then(function (results) {
                        console.log(results);
                        var response = {
                            subjects: results[0],
                            msg: "Subject has been updated."
                        }
                        res.render(self_url,{data:response});
                    }).catch(function (err) {
                        res.render(self_url,{data:{error: "Could not get data"}});
                    });
                }
            }).catch(function (err) {
                res.render(self_url,{data:{error: "Could not update data."}});
            })
       }else{
           res.render(self_url,{data:{error: "Could not update data."}});
       }
   }
});

module.exports = router;