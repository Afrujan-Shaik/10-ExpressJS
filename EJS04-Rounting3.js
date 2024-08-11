var express = require("express");
var app = express();
var port = 8000;
app.get("/",(req,res) => {
    res.send("Hello World from ExpressJS : Afru")
});
app.get("/home",(req,res)=>{
    res.send("Display from Home Page: :Afru")
});
app.listen(port,()=>{
    console.log("Running on port 8000")
})