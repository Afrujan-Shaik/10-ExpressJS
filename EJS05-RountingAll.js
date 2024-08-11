var myexpress = require("express");
var app = myexpress();
var port = 8000;
app.get("/",(req,res) => {
    res.send("Hello World from ExpressJS : Afru")
});
app.get("/home",(req,res)=>{
    res.send("Display from Home Page: :Afru")
});
app.get("/about",(req,res)=>{
    res.send("Display from About Page: :Afru")
});
app.get("/contact",(req,res)=>{
    res.send("Display from contact Page: :Afru")
});
app.listen(port,()=>{
    console.log("Running on port 8000")
})