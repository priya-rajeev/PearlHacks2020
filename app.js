// this contains the backend code for your nodejs server
// you can modify this to do things in response to receiving texts and frontend
// actions (i.e. button clicks) like storing something in a DB or calling
// another API or sending more texts
// import {billNames} from './bills';

// import {billNames}  from "./bills";

const express = require('express');
const path = require('path');
const Bandwidth = require('node-bandwidth');
const basicAuth = require('basic-auth');

// Config
const app = express();
const PORT = process.env.PORT || 8180;
const SERVER_USERNAME = process.env.USERNAME || 'pearlhacks3';
const SERVER_PASSWORD = process.env.PASSWORD || 'dP2FGsWFdhDxdr8A';
const client = new Bandwidth({
    userId    : process.env.BW_USER_ID || "u-fevafkbs5bdvd64iwq7vhyy",
    apiToken  : process.env.BW_API_TOKEN_ID || "t-yvryxxmd3efm2dyt7fezdaa",
    apiSecret : process.env.BW_API_TOKEN_SECRET || "vv73kfuovw5johksy47cmgtvvyqgxxie2ljgdta"
});


// Middlewares

// the __dirname is the current directory from where the script is running
const BUILD_DIR = path.resolve(__dirname, 'dist');
// server static files middleware
app.use(express.static(BUILD_DIR));

// disable CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// JSON body parser middleware for parsing callback events
app.use(express.json());

// basic auth middleware
const auth = function (req, res, next) {
  function unauthorized(res) {
    logger.warn('Unauthorized');
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === SERVER_USERNAME && user.pass === SERVER_PASSWORD) {
    return next();
  } else {
    return unauthorized(res);
  };
};

// API endpoints

// serve index.html for the frontend app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(BUILD_DIR, 'index.html'));
});


// receive a text callback from bandwidth
app.post('/receiveText', auth, (req, res, next) => {
  if (!req.is('application/json')) {
    res.sendStatus(415);
    return next();
  }

  const catapultData = req.body;
  console.log(catapultData);
  res.send("received!")
})

// send a text via bandwidth

// let arr = []; //this will store all of the entry data (an array of arrays)
const bills = ["Wage gap", "Abortion", "Women"]; //array of all bills from website
let billsSend = [];

app.get('/pushingData', (req,res) => {
  console.log("Pushing data")
  // let entry = [];

  // entry[0] = req.params.name; //name
  // entry[1] = req.params.number; //number
  // entry[2] = req.params.state; //state
  // entry[3] = req.params.key; //keyword

  // const name = req.params.name; //name
  // const num = req.params.number; //number
  // const state = req.params.state; //state

  const keyword = req.query.to; //keyword


  // arr.push(keyword);

  bills.forEach(bill => {
    if (bill.includes(keyword)) {
          billsSend.push(bill);
        }
  })

  console.log(billsSend);
  res.send();
})





app.get('/sendText', (req,res) => {
  // TODO validate its a real phone number in the proper format
  console.log("Sending text to ", req.query.to)
  var message = {
    from: process.env.BW_FROM_NUMBER || "+18672923682", // <-- This must be a Bandwidth number on your account
    to: req.query.to,
    text: "Hello World"
  };

  client.Message.send(message)
      .then(function(message) {
        console.log("Message sent with ID " + message.id);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  res.send("sent!");
})

// Start the server
app.listen(PORT, function() {
  console.log("server is running on " + PORT)
});




// Start the server
app.listen(PORT, function() {
  console.log("server is running on " + PORT)
});
