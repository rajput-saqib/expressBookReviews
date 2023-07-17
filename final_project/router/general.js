const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).json({'books' : books});

});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  return res.status(200).json(books[req.params.isbn]);
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {

  const matchingBooks = [];

  for (const key in books) {
    if (books[key].author === req.params.author) {
      matchingBooks.push(books[key]);
    }
  }

  return res.status(200).json({'books_by_author' : matchingBooks});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const matchingBooks = [];

  for (const key in books) {
    if (books[key].title === req.params.title) {
      matchingBooks.push(books[key]);
    }
  }

  return res.status(200).json({'books_by_title' : matchingBooks});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  return res.status(200).json(books[req.params.isbn].reviews);
});

public_users.post("/register", (req,res) => {
  return res.status(300).json({message: "User Registration complete successfully. Now you can login."});
});

module.exports.general = public_users;
