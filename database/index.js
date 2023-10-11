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

app.listen(3000,() => {
    console.log('server running in port 3000')
})

db.connect(err => {
    if(err) {
        console.log('err.massage')
    } else {
        console.log('conected')
    }
})

app.get("/", (req, res) => {
    console.log(res.send("ROUTE OPEN ...."))
})