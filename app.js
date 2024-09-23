import express from "express";

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('index sayfasi 2');
});

app.get('/dedeler', (req,res) => {
    res.send('index sayfasi 4');
});

app.listen(port, () => {
    console.log('application running on port:' + port);
    console.log('application running on port: $port');
});