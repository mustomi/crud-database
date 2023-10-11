import {Client} from 'pg'

const db = Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "postgres"
})

Module.exports = db