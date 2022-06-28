require('dotenv').config();
const mongoose = require("mongoose");

console.log("DB_ID:", process.env.DBID);
console.log("DB_PW:", process.env.DBPW);

const connect = () =>{
    mongoose.connect("mongodb://localhost:27017/lojy_mall", { ignoreUndefined: true }).catch((err) =>{
        console.error(err);
    });
};

module.exports = connect;