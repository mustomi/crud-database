import express from 'express'
import bodyParser from 'body-parser'

import db from './config/db.js'

const app = express()

db.connect(err => {
    if(err) throw err
    console.log('database conected ...') 

    app.get("/", (req, res) => {
        db.query(`SELECT * FROM users`, (err, result) => {
            const users = JSON.parse(JSON.stringify(result))
            console.log(users.rows)
            res.send(users.rows)
        })
    })
})

app.listen(5174,() => {
    console.log('server running in port 5174')
})
