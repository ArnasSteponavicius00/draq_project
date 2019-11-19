const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://admin:admin@gmitlabcluster-wojry.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongodb, { useNewUrlParser: true });

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.listen(port, () => console.log("Server is up!"));