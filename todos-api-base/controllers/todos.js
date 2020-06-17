const sql = require('mssql')
const config = require('../config')

const parseSPResponse = (recordset) => {
    const key = Object.keys(recordset[0])[0]
    return recordset[0][key]
}
module.exports = {
    index: async (req, res) => {

        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .execute('GetTodos')
        console.log(result1)

        return res.type('application/json').send(parseSPResponse(result1.recordset))

    },
    todo: async (req, res) => {

        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('TodoID', sql.BigInt, req.params.id)
            .execute('GetTodos')
        const response = JSON.parse(parseSPResponse(result.recordset));
        return res.type('application/json').send(response[0])

    }
}