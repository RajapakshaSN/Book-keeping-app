const express = require('express');
const User = require('./models/User');
require('./config/dbConnect')();
const mongoose = require('mongoose');
const app = express();

//Passing body data
app.use(express.json());
//Routes
//Users routes
app.post('/api/users/register',async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user = await User.create({name,email,password});
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
    
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