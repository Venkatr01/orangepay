const mongoose = require('mongoose');
const { Schema } = require('zod');

mongoose.connect('mongodb+srv://vraju4865:IU3TbXXN2mFadqML@venkat.maum9h0.mongodb.net/paytm')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstNaame: String,
    lastName: String
});    //refer S2 for better Schema

const User = mongoose.model('User',userSchema);

module.exports = {
    User
}