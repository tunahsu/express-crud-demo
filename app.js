var express = require('express')
var app = express()
var router = require('./router')
var bodyParser = require('body-parser')

app.engine('html', require('express-art-template')) //此模塊用來把 art-template 整合進 Express

app.use('/public/', express.static('./public/')) //開放 public/ 資料夾
app.use('/node_modules/', express.static('./node_modules')) //開放 node_modules/ 資料夾

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router) //掛載路由

app.listen(3000, function() {
    console.log('Running on 127.0.0.1:3000/ ...')
})