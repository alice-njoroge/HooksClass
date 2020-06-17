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
    save: async (req, res) => {
        let body = req.body;
        let pool = await sql.connect(config)
        let request = await pool.request()

        for (const key in body) {
            if( key === 'id') request.input('TodoID',sql.BigInt, body.id)
            if( key === 'title') request.input('Title',sql.VarChar(255), body.title)
            if( key === 'description') request.input('Description',sql.Text, body.description)
            if( key === 'done') request.input('Done',sql.Bit, body.done)
            if( key === 'deleted') request.input('IsDeleted',sql.Bit, body.deleted)
        }
        await request.execute('SaveTodo');

        res.type('application/json').send({message: 'success'})
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