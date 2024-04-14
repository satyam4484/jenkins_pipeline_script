const express = require("express")
const app = express()


app.get('/',async(req,res) => {
    return res.json({message:"Hello from the server"});
});

app.listen(8000,() => {
    console.log("server started at port "+8000)
})