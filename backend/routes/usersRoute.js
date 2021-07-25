const User = require('../models/User');
const express = require('express');

const usersRoute = express.Router();

//Users routes
usersRoute.post('/register',async (req,res)=>{
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
usersRoute.post('/login',(req,res)=>{
    res.send('login Route');
});

//update user
usersRoute.put('/update',(req,res)=>{
    res.send('Update Route');
});

//delete user
usersRoute.delete('/:id',(req,res)=>{
    res.send('Delete route');
});

//fetch Users
usersRoute.get('/',(req,res)=>{
    res.send('Fetch users');
});


module.exports = usersRoute;