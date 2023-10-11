import pg from 'pg'
const Client = pg.Client

const db = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgres"
})

export default db