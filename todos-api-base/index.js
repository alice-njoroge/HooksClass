const express = require('express');
const cors  = require('cors')
const app = express()
const bodyParser = require('body-parser')

const port = 5000;
const todoRoutes = require('./routes/todos');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/todos', todoRoutes)


app.listen(port, () => console.log(`app listening at http://localhost:${port}`))