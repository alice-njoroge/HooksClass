const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'todos',
}
module.exports = config;