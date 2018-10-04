var express = require('express')
var router = express.Router()
var fs = require('fs')
var Student = require('./student')


router.get('/students', function(req, res) {
    Student.find(function(err, data) {
        if(err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html',{
            students: data
        })
    })
})

router.get('/students/new', function(req, res) {
    res.render('new.html')
})

router.post('/students/new', function(req, res) {

})

router.get('/students/edit', function(req, res) {

})

router.post('/students/edit', function(req, res) {

})

router.get('/students/delete', function(req, res) {

})

module.exports = router