const express = require('express');
const log = require('../index');
const app = express();

app.use(log({
    icon: true,
    logFile: true,
    colors: true
}));
app.get('/', (req, res)=>{
    res.send('It works')
});
app.listen(8000);
