const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/views/index.html')
})

app.get('/babbage', (req, res) => {
  res.sendFile(__dirname, '/babbage.html')
})

app.get('/bernes-lee', (req, res) => {
  res.sendFile(__dirname, '/bernes-lee.html')
})

app.get('/clarke', (req, res) => {
  res.sendFile(__dirname, '/clarke.html')
})

app.get('/hamilton', (req, res) => {
  res.sendFile(__dirname, '/hamilton.html')
})

app.get('/hopper', (req, res) => {
  res.sendFile(__dirname, '/hopper.html')
})

app.get('/lovelace', (req, res) => {
  res.sendFile(__dirname, '/lovelace.html')
})

app.get('/turing', (req, res) => {
  res.sendFile(__dirname, '/turing.html')
})

app.listen(port, () => console.log(`Server in port ${port}`))