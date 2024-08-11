var myexpress = require("express");
var app = myexpress();
var port = 8000;
app.get("/",(req,res) => {
    res.send("Hello World from ExpressJS : Afru")
});
app.get("/about",(req,res)=>{
    res.send("Display from About Page: :Afru")
});
app.listen(port,()=>{
    console.log("Running on port 8000")
})