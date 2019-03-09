const Pool = require('pg').Pool
const pool = new Pool({
    user: 'kyle',
    host: '52.91.83.98',
    database: 'kyle',
    password: 'password',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM playground', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
}