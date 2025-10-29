const express = require('express');
// const env = require("dotenv").config()
const {MongoClient} = require('mongodb');
const mongodb = require('./database/database')
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser")
const professionalRoutes = require('./routes/professional')
const static = require("./routes/static")



// BodyParser Usage
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true})) // for parsing application/x-www-form-urlencoded

app.use('/', static);

app.use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.error('Failed to connect to MongoDG', err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
