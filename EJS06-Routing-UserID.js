const myexpress = require('express');
const app = myexpress();
const port = 3002;
 app.get('/user/:id',(req,res)=>{
    res.send(`User ID: ${req.params.id}`);
 });
app.listen(port,()=>{
    console.log('Server running at 3002 : Afru');
});