const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', function (req,res) {
    res.sendFile(path.join(__dirname, "../styles.css"))
})

app.get('/img', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/audio', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4004

app.listen(port, ()=> console.log(`welcome to port ${port} stay a while`))
