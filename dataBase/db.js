const mongoose = require('mongoose');
require('dotenv').config();

exports.DbConnect = async (req,res) =>{
    mongoose.connect(process.env.MONGO_URL).then(() =>{
         console.log('Database connected successfully');
    }).catch((error) =>{
        console.error('Database connection error:', error);
    })
};

