const mongoose = require("mongoose");

const schema = mongoose.Schema({
    level:String,
    email:String,
    location:String,
    proc_type:String,
    log:String,
},{
    version_key:false,
    timestamps:{
        created_at:"created_at",
        updated_at:"updated_at"
    }
});

class AuditLogs extends mongoose.Model{
     
}

schema.loadClass(AuditLogs);
module.exports = mongoosee.model("audit_logs", schema);