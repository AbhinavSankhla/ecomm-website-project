const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@abhinav.fv0w8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.APP_NAME}`;

mongoose.connect(url)

.then(()=>{
    console.log('database connected successfully')
})

.catch((error)=>{
    console.log(error);
})