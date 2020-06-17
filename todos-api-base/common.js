const sql = require('mssql')
const config = require('./config')

const parseSPResponse = (recordset) => {
    const key = Object.keys(recordset[0])[0]
    return recordset[0][key]
}

module.exports = {
    db: {
        execList: async (Sp_Name, params=null) => {
            let pool = await sql.connect(config)
            if(params) {

            }
            let result1 = await pool.request()
                .execute('GetTodos')
        }
    }
}