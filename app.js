const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/default");
let port = process.env.PORT;

const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const file = require('./services/files');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

var admin_Login = require('./routes/admin');
app.use("/auth",admin_Login);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
  
