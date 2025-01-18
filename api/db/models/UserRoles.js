const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    }
},{
    version_key:false,
    timestamps:{
        created_at:"created_at",
        updated_at:"updated_at"
    }
});

class UserRoles extends mongoose.Model{
     
}

schema.loadClass(UserRoles);
module.exports = mongoosee.model("user_roles", schema);