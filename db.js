const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "katara",
    host: "localhost",
    port: 5432,
    database: "products"
})

module.exports = pool;