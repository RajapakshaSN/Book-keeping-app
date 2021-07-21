const express = require('express');
require('./config/dbConnect')();
const mongoose = require('mongoose');
const app = express();


//Routes
//Users routes
app.post('/api/users/register',(req,res)=>{
    res.send('Register route');
});

//login
app.post('/api/users/login',(req,res)=>{
    res.send('login Route');
});
//update user
app.put('/api/users/update',(req,res)=>{
    res.send('Update Route');
});

//delete user
app.delete('/api/users/:id',(req,res)=>{
    res.send('Delete route');
});

//fetch Users
app.get('/api/users',(req,res)=>{
    res.send('Fetch users');
});

// //Server

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
console.log(`Server is up and running ${PORT}`);
});

// // shash
// // jfHGWu6OT003x8TI
// // mongodb+srv://shash:<password>@shash.4ojvk.mongodb.net/test