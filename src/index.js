const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add', (req, res) => {
    const {num1, num2} = req.query;
    if (num1 == null || num2 == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    res.send(sum.toString());
});

app.listen(port);