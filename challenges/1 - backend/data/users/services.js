let users = ["Helena", "Mark", "David", "Martha"]
const db = require("../database.js")
const getUsersHandler=(req,res)=>{
    db.all("select * from users;",(error,result)=>{
        console.log(error,result)
        if(error){
            console.error(error)
        res.send("error occured")
    }
    else{res.json(result)}
    })
}
const createUserHandler=(req,res)=>{
    users.push(req.params.name)
    res.send(users)
}
const deleteUserHandler=(req,res)=>{
    users = users.filter((item)=>item != req.params.name)

    res.send(users)
}
const replaceUserHandler=(req,res)=>{
    users = users.map((currentName)=>{
        if(currentName == req.params.name){
            return(req.body.newName)
        
        }
        else{
            return(currentName)
        }
    })
    res.send(users)
}
module.exports={getUsersHandler,createUserHandler,deleteUserHandler,replaceUserHandler}