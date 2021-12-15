const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', function (req,res) {
    res.sendFile(path.join(__dirname, "../styles.css"))
})

app.get('/img/hippy-background.jpg', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/audio', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.use('/img/hippy-background.jpg', express.static(path.join(__dirname, '../img/hippy-background.jpg')))

app.use('/audio/crabrave.mp3', express.static(path.join(__dirname, '../audio/crabrave.mp3')))


const port = process.env.PORT || 4004

app.listen(port, ()=> console.log(`welcome to port ${port} stay a while`))
