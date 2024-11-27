const express = require('express');
const allRoutes = require('./src/app');
const path = require('path')
const cors = require('cors');
// const cookieParser = require('cookie-parser'); // Require cookie-parser
const { registerAdmin } = require('./src/controllers/controllers');

require('dotenv').config();

const app = express();
app.use(express.json());  //used to give req.body data in json format.

app.use(cors());

// app.use(
//     cors({
//       origin: ["http://localhost:5173", 'http://localhost:3000'],// Replace with your frontend URL
//       credentials: true,
//     })
// );
  
app.use('/uploads', express.static(path.join(__dirname,'src','uploads')));

app.use(allRoutes);

registerAdmin();

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});