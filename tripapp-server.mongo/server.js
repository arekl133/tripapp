#!/usr/bin/env node
require('dotenv').config()
const crypto = require('crypto')
const express = require('express')
const session = require('express-session')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'))

const router = require('./routes/index')

   
 app.use(express.json())
  app.use(session({
      secret: "trip_advisor",
     // resave: false,
      //saveUninitialized: true,
  }))



app.use('/', router);


app.listen(3000, () => {
    console.log("TripApp started")
});
