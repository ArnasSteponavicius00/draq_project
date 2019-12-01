const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://admin:admin@gmitlabcluster-wojry.mongodb.net/test?retryWrites=true&w=majority';

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose
    .connect(mongodb, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

var Users = require('./routes/Users');

app.use('/users', Users)

app.listen(port, () => console.log("Server is up!"));