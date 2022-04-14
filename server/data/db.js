const Book = require("../models/Book.js");
const Author = require("../models/Author.js");

const mongoDataMethods = {
  getAllBooks: async () => await Book.find(),
};

module.exports = mongoDataMethods;
