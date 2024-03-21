const auth = (req,res,next)=>{
    if(req.query.password == "1234"){
        next()
    }
    else{
        res.send("wrong password")
    }
}
module.exports = auth