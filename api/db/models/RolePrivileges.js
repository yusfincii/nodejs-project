const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    created_by:{
        type:mongoose.SchemaTypes.ObjectId
    },
    permission:String,

},{
    version_key:false,
    timestamps:{
        created_at:"created_at",
        updated_at:"updated_at"
    }
});

class RolePrivileges extends mongoose.Model{
     
}

schema.loadClass(RolePrivileges);
module.exports = mongoosee.model("role_privileges", schema);