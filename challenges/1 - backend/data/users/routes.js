const {getUsersHandler,createUserHandler,deleteUserHandler,replaceUserHandler}=require("./services.js")
const auth = require("../auth.js")
const userRoutes = (app)=>{
    app.get("/users",getUsersHandler)
    
    app.post("/users/:name",auth,createUserHandler)
    app.delete("/users/:name",auth,deleteUserHandler)
    
    app.put("/users/:name",auth,replaceUserHandler)
    
}
module.exports = userRoutes