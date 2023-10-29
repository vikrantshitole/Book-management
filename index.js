const bodyParser = require('body-parser')
const express = require('express')
require('dotenv').config();
const app = express()
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log('App running on http://localhost:3000');
})