const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model('users',userSchema);