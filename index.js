const express = require('express')
// import { Express } from 'express'
const app = express()


const port = 4000

app.get('/', (req, res) => {
      res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send("my twitter")
})

app.get('/login',(req,res) => {

        res.send('<h1>My name is ram</h1>')
})

app.get('/youtube',(req,res) => {

    res.send("<h2>Welcome to my youtube channel</h2>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})