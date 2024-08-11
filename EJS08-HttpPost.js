const myexpress = require('express');
const app = myexpress();
const port = 3000;
app.use(myexpress.json());
app.post('/user',(req,res) =>{
    res.send(`Hello, ${req.body.name}`);
});
app.listen(port,() =>{
    console.log('Server running at 3000 :RAM');
});//http://localhost:3000/user
