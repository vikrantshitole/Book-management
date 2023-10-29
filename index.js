const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config();
const db = require('./models')

const app = express()
app.use(bodyParser.json())
db()
app.listen(3000,()=>{
    console.log('App running on http://localhost:3000');
})