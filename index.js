const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config();
const db = require('./models')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
db()
app.use('/book',routes)

app.listen(3000,()=>{
    console.log('App running on http://localhost:3000');
})