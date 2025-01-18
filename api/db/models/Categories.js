const mongoose = require("mongoose");

const schema = mongoose.Schema({
    isActive: {
        type:Boolean,
        default:true
    },
    created_by:{
        type:mongoose.SchemaTypes.ObjectID
    },
},{
    version_key:false,
    timestamps:{
        created_at:"created_at",
        updated_at:"updated_at"
    }
});

class Categories extends mongoose.Model{
     
}

schema.loadClass(Categories);
module.exports = mongoosee.model("categories", schema);