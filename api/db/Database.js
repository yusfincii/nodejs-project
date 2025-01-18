const mongoose = require("mongoose");

let instance = null;
class Database{

    constructor(){
        if(!instance){
            this.mongoConnection = null;
            instance = this;
        }
        
        // statik hale getirildi
        return instance;
    }

    async connect(options) {
        try {
            console.log("db connection initializing...");
            let db = await mongoose.connect(options.CONNECTION_STRING);
            this.mongoConnection = db;
            console.log("db connection success!");
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
    }

}

module.exports = Database;