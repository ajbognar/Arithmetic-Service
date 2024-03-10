require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const { subtract } = require("./arithmetica");
const { multiply } = require("./arithmetica");
const { divide } = require("./arithmetica");
const app = express();
app.use(cors());

if(!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT");
}

const port = process.env.PORT

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
app.get('/subtract', (req, res) => {
    const {num1, num2} = req.query;
    if (num1 == null || num2 == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.send(result.toString());
});
app.get('/multiply', (req, res) => {
    const {num1, num2} = req.query;
    if (num1 == null || num2 == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.send(result.toString());
});
app.get('/divide', (req, res) => {
    const {num1, num2} = req.query;
    if (num1 == null || num2 == null) {
        return res.status(400).send('Error - Please provide two numbers');
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.send(result.toString());
});


app.listen(port);