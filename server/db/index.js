const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: '',
    database:'api'

})

if(pool){
    console.log("db connected");
}
else{
    console.log("db failed to connect");

}
let api = {};
api.all = () =>{
    return new Promise((resolve,reject) =>{
        pool.query('select * from student',(err,result)=>{

            if(err){
                return reject(err);
            }
                return resolve(result);
        });
    });
}


api.one =  (id) =>{
    return new Promise((resolve,reject)=>{
        pool.query('select * from student where id = ?',[id], (err,result)=>{
            if(err){
                return reject(err);
            }
                return resolve(result[0]);
        });
    });
}

api.add =  (username,gpa) =>{
    return new Promise((resolve,reject)=>{
        pool.query("insert into student(username,gpa) value(??)",[username],[gpa], (err,result)=>{
            if(err){
                return reject(err);
                console.log("error saving failed");
            }
                return resolve(result);
                console.log("saved successfully");
        });
    });
}
api.update =  (id,username,gpa) =>{
    return new Promise((resolve,reject)=>{
        pool.query("Update from users SET username = ? , SET gpa = ? where id = ?",[username],[gpa], (err,result)=>{
            if(err){
                return reject(err);
                console.log("error saving failed");
            }
                return resolve(result);
                console.log("saved successfully");
        });
    });
}

module.exports = api;