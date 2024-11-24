const express = require('express');
const { registerUser, readUser, deleteUser } = require('../../controllers/controllers');

const userRoutes = express.Router();

userRoutes.post('/register_user',registerUser);
userRoutes.get('/read_user',readUser);
userRoutes.delete('/delete_user/:_id',deleteUser);

module.exports = userRoutes;