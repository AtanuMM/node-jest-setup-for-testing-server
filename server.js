//importing the packages
const express = require ("express")
const { exec } = require('child_process')
const morgan = require ("morgan")
const bodyParser = require ("body-parser")
const cors = require("cors");
const path = require('path')
require("dotenv").config();

//initilizing  the app
const app = express();


//setting up the middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//creating the absolute path of the test file
const testFilePath = path.join(__dirname, 'src', 'spec.js');


//declaring and using a dummy route
app.get('/run-tests', (req, res) => {
  exec(`jest --json ${testFilePath}`, (error, stdout, stderr) => {
    const jestOutput = JSON.parse(stdout); // Parse the Jest output as JSON

    if (error) {
      // Handle errors if Jest CLI fails to run
      const errorMessage = 'Jest tests failed to run.';
      const fullErrorMessage = `${errorMessage}\n${stderr}`; // Combine the error message and stderr
     // const responseToSend = JSON.parse(fullErrorMessage)

      res.status(500).send(fullErrorMessage);
    } else {
      // If tests passed successfully, send the Jest CLI output as the response
      res.status(200).json(jestOutput);
    }
  });
  // console.log("in here")
  // res.send("All okay")
});


const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`Express server running on ${port}`);
  });