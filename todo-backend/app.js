// core modules
const path = require('path');


// external modules
const express = require('express');
const mongoose = require('mongoose');



// Dbpath
const DB_PATH = "mongodb+srv://dubey_dbuser:backendPassword@completairbnb.idrzuwa.mongodb.net/todo?retryWrites=true&w=majority&appName=completairbnb"

// local modules
const app = express();
app.use(express.static(path.jpoin(rootDir,'public')))



// Public Routes
app.use(authRouter);
app.use(storeRouter);

// Protect Host Routes

//  Now Use Host Router
app.use("/host", hostRouter);

// 404
app.use(errorController.pagenotfound);

// Start Server
const port = 3000;
mongoose.connect(DB_PATH)
  .then(() => {
    console.log('Connected to Mongo');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.log('Error connecting to Mongo:', err);
  });
