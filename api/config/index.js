module.exports={
    LOG_LEVEL : process.env.LOG_LEVEL || "debug",
    CONNECTION_STRING : process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/project_base_ytb",
    PORT : process.env.PORT || "3000"
};