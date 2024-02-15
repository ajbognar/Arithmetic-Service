const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const { subtract } = require("./arithmetica");
const { multiply } = require("./arithmetica");
const { divide } = require("./arithmetica");
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    if (n == null || m == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    let sum = add(n, m);
    res.send(sum.toString());
});
app.get('/subtract/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    if (n == null || m == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    let result = subtract(n, m);
    res.send(result.toString());
});
app.get('/multiply/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    if (n == null || m == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    let result = multiply(n, m);
    res.send(result.toString());
});
app.get('/divide/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    if (n == null || m == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    let result = divide(n, m);
    res.send(result.toString());
});


app.listen(port);