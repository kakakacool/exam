var q = require('q');
var db = require("../Common/database");
var appModel = require('./AppModel');

function addSubject(data) {
    return appModel.insertData('subjects', data);
}

function getAllSubject() {
    return appModel.getAll('subjects');
}

function getSubjectById(id) {
    return appModel.getById('subjects', id);
}

function updateSubjectById(value, id) {
    return appModel.updateField('subjects',['name','updated'],value,id);
}

module.exports = {
    addSubject: addSubject,
    getAllSubject: getAllSubject,
    getSubjectById: getSubjectById,
    updateSubjectById: updateSubjectById
}
