// core modules
const path = require('path');


// external modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Dbpath
const DB_PATH = "mongodb+srv://dubey_dbuser:backendPassword@completairbnb.idrzuwa.mongodb.net/todo?retryWrites=true&w=majority&appName=completairbnb"

// local modules
const errorController =require("./controllers/error");
const todoItemsRouters = require('./routes/todoitemsRouter');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.use("/api/todo",todoItemsRouters)

// 404
app.use(errorController.pageNoteFound);

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











  