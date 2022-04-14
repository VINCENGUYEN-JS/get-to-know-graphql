const { books, authors } = require("../data/static.js");
const Author = require("../models/Author.js");
const Book = require("../models/Book.js");

const resolvers = {
  /**Query Data */
  Query: {
    books: async (parent, args, context) =>
      await context.mongoDataMethods.getAllBooks(),
    book: (parent, args) => books.find((book) => book.id === Number(args.id)),
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => author.id === Number(args.id)),
  },
  Book: {
    author: (parent, args) =>
      authors.find((author) => author.id === parent.authorId),
  },
  Author: {
    books: (parent, args) =>
      books.filter((book) => book.authorId === parent.id),
  },
  /**Mutation Data */
  Mutation: {
    createAuthor: async (parent, args) => {
      const newAuthor = new Author(args);
      return await newAuthor.save();
    },
    createBook: async (parent, args) => {
      const newBook = new Book(args);
      return await newBook.save();
    },
  },
};

module.exports = resolvers;
