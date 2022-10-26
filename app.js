const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(port, ()=> console.log('Funciona!${port}'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'/views/home.html'));
});
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
});
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
});