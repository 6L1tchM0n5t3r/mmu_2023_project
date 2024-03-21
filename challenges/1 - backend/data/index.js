const express = require("express")
const userRoutes = require("./users/routes.js")
const app = express()
const PORT = 3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("lulz")
}) 
app.get("/memes",(req,res)=>{
    res.send("fku")
}) 
userRoutes(app)



app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})
