var express = require('express')
var router = express.Router()
var fs = require('fs')
var Student = require('./student')

router.get('/', function(req, res) {
    res.redirect('/students')
})

router.get('/students', function(req, res) {
    Student.findAll(function(err, data) {
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
    Student.save(req.body, function(err) {
        if(err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})

router.get('/students/edit', function(req, res) {
    Student.findById(parseInt(req.query.id), function(err, data) {
        if(err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: data
        })
    })
})

router.post('/students/edit', function(req, res) {
    Student.update(req.body, function(err) {
        if(err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})

router.get('/students/delete', function(req, res) {
    Student.deleteById(req.query.id, function(err) {
        if(err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    }) 
})

module.exports = router