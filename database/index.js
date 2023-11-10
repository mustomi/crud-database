import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import db from './config/db.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

db.connect(err => {
    if(err) throw err
    console.log('database conected ...') 
})

app.get("/",(req, res) => {
    const data = [
    {
        name: "mustomi",
        role: "admin",
        email: "mustomi07@gmail.com",
        description: "full akses"
    }]
    res.json({
        message: "get All users",
        data: data
    })
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.json({
        message: 'create user success',
        data: req.body})
})

app.get("/users",(req, res) => {
    db.query(`SELECT * FROM users`, (err, result) => {
        const users = JSON.parse(JSON.stringify(result))
        console.log(users.rows)
        res.send(users.rows)
    })
})

app.listen(5174,() => {
    console.log('server running in port 5174')
})
