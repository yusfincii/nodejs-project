const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_name:{
        type:String,
        required:true
    },
    is_active:{
        type:Boolean,
        default:true
    },
    created_by:{
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

class Roles extends mongoose.Model{
     
}

schema.loadClass(Roles);
module.exports = mongoosee.model("roles", schema);