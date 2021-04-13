const express = require('express');
const app = express();
const pool = require('./config/database');

app.get('/',(req,res)=>res.send('<h1>Hello world express con html</h1>'));

app.listen(3000);
console.log('server on port 3000');