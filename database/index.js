import express from 'express'
import bodyParser from 'body-parser'
import pg from 'pg'

const Client = pg.Client

const db = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgres"
})

const app = express()

app.listen(5174,() => {
    console.log('server running in port 5174')
})

db.connect(err => {
    if(err) {
        console.log('err.massage')
    } else {
        console.log('conected')
    }
})

