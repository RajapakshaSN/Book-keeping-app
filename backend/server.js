const express = require('express');
const User = require('./models/User');
const usersRoute = require('./routes/usersRoute');
require('./config/dbConnect')();
const mongoose = require('mongoose');
const app = express();

//Passing body data
app.use(express.json());
//Routes
app.use('/api/users', usersRoute);


// //Server

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
console.log(`Server is up and running ${PORT}`);
});

// // shash
// // jfHGWu6OT003x8TI
// // mongodb+srv://shash:<password>@shash.4ojvk.mongodb.net/test