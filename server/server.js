const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./routes')

const app = express();
const port = process.env.PORT || 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbConnect()
// app.use('/', (req, res) => { res.send('SERVER ON') })

initRoutes(app)

app.listen(port, () => {
    console.log('Sever running on the port' + port);
})