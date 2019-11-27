const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const mongodb = 'mongodb+srv://admin:admin@gmitlabcluster-wojry.mongodb.net/test?retryWrites=true&w=majority';

app.use(cors());
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