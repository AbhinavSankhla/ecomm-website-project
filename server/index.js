const express = require('express');
const allRoutes = require('./src/app');
const path = require('path')
require('dotenv').config();

const app = express();
app.use(express.json());  //used to give req.body data in json format.

app.use('/uploads', express.static(path.join(__dirname,'src','uploads')));

app.use(allRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});