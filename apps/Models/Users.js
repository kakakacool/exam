var q = require('q');
var db = require("../Common/database");
var appModel = require('../Models/AppModel');

function getUserByUsername(username) {
    return appModel.selectData('administrators', {username: username});
}

module.exports = {
    getUserByUsername: getUserByUsername
}
