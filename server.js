//importing the packages
const express = require ("express")
const morgan = require ("morgan")
const bodyParser = require ("body-parser")
const cors = require("cors");
require("dotenv").config();

//initilizing  the app
const app = express();


//setting up the middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`Express server running on ${port}`);
  });