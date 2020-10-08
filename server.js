const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cros = require('cors');
const { propfind } = require('./src/routes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser:true, 
        useUnifiedTopology: true }
    );

requireDir('./src/models');

app.use('/api', require("./src/routes"))

app.listen(3001);