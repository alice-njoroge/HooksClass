const app = require('express')()
const port = 5000;
const todoRoutes = require('./routes/todos');

app.use('/todos', todoRoutes)


app.listen(port, () => console.log(`app listening at http://localhost:${port}`))