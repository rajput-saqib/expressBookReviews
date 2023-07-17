const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  return res.status(200).json({message: "User loggedIn successfully."});
});

// Add a book review
regd_users.put("/review/:isbn", (req, res) => {
  return res.status(200).json({message: "The review for the book with ISBN "+req.params.isbn+" is added/update"});
});

regd_users.delete("/review/:isbn", (req, res) => {
  return res.status(200).json({message: "The review for the book with ISBN "+req.params.isbn+" is deleted."});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
