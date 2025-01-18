const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email:String,
    password:String,
    isActive:Boolean,
    first_name:String,
    last_name:String,
    phone_number:String
},{
    timestamps:{
        created_at:"created_at",
        updated_at:"updated_at"
    }
});

class Users extends mongoose.Model{
     
}

schema.loadClass(Users);
module.exports = mongoosee.model("users", schema);