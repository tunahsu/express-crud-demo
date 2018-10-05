/**
 * 封裝 Student 數據操作的模塊
 */

var fs = require('fs')
var dbPath = './db.json'

exports.findById = function(id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        var stu = students.find(function(item) {
            return item.id === parseInt(id)
        })

        callback(null, stu)
    })
}

exports.findAll = function(callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if(err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.save = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        try {
            student.id = students[students.length - 1].id + 1
        }
        catch(err){
            student.id = 0
        }
        students.push(student)
        
        var fileData = JSON.stringify({students : students})
        fs.writeFile(dbPath, fileData, function(err) {
            if(err) {
                return callback(err)
            }
            return callback(null)
        })
    })
}

exports.update = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        
        var stu = students.find(function(item) {
            return item.id === parseInt(student.id)
        })

        student.id = parseInt(student.id)

        for(var key in student) {
            stu[key] = student[key]
        }

        var fileData = JSON.stringify({students : students})
        fs.writeFile(dbPath, fileData, function(err) {
            if(err) {
                return callback(err)
            }
            return callback(null)
        })
    })
}

exports.deleteById = function(id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if(err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        
        var stu = students.findIndex(function(item) {
            return item.id === parseInt(id)
        })

        students.splice(stu, 1)

        var fileData = JSON.stringify({students : students})
        fs.writeFile(dbPath, fileData, function(err) {
            if(err) {
                return callback(err)
            }
            return callback(null)
        })
    })
}