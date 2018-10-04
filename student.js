/**
 * 封裝 Student 數據操作的模塊
 */

var fs = require('fs')
var dbPath = './db.json'

//使用回調函數
exports.find = function(callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if(err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.save = function() {
    
}

exports.update = function() {
    
}

exports.delete = function() {
    
}