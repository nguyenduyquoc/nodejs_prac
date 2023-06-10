// connect mongodb
const server = "mongodb://localhost:27017";
const db_name = "t2204m_practice";
const mongoose = require("mongoose");

class Database{
    constructor(){
        this._connect();
    }
    _connect(){
        mongoose.connect(`${server}/${db_name}`)
    .then(()=>{ //call back function
        console.log("connected to db successfully");
    })
    .catch(err=>{
        console.log(err);
    });
    }
}

module.exports =new Database();
