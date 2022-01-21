const express = require('express');

const app = express();

app.get('/',(req,res)=>{
        res.send('hello from Express');
});
app.get('/api',(req,res)=>{
        res.send('<h1>from Api</h1>');
})
app.get('*',(req,res)=>{
        res.send("Page not Found")
})
app.listen(3000,()=>console.log('server is on port 3000'));
