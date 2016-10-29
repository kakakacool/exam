var q = require('q');
var db = require("../Common/database");

var conn = db.getConnection();

function selectData(table, conditions) {
    if(conditions){
        var defer = q.defer();
        var query = conn.query('SELECT * FROM '+ table +' WHERE ?', conditions, function (err, result) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        });
        return defer.promise;
    }else{
        return false;
    }
}

function updateField(table, fields, value, id) {
    var defer = q.defer();
    var field = '';
    if(fields.length > 1){
        for (var i = 0; i < fields.length; i++){
            if(i < fields.length - 1){
                field += fields[i] + ' = ?,';
            }else{
                field += fields[i] + ' = ?';
            }
        }
    }else{
        field = fields[0] + ' = ?';
    }

    value.push(id);

    var query = conn.query('UPDATE '+ table + ' SET '+ field + ' WHERE id = ? ', value,function (err, result) {
        if (err){
            defer.reject(err);
        }else{
            defer.resolve(result);
        }
    });
    return defer.promise;
}

function insertData(table, data) {
    if(data != ''){
        var defer = q.defer();
        var query = conn.query('INSERT INTO '+ table +' SET ?', data, function(err, result) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        });
        return defer.promise;
    }else{
        return false;
    }
}

function getAll(table, fields) {
    var defer = q.defer();
    var query = conn.query('SELECT * FROM '+ table, function(err, result) {
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(result);
        }
    });
    return defer.promise;
}

function getById(table,id) {
    var defer = q.defer();
    var query = conn.query('SELECT * FROM '+ table + ' WHERE ?', {id:id}, function(err, result) {
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(result);
        }
    });
    return defer.promise;
}

module.exports = {
    selectData: selectData,
    updateField: updateField,
    insertData: insertData,
    getAll: getAll,
    getById: getById
}