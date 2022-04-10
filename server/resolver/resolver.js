const { books, authors } = require("../data/static.js");

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

module.exports = resolvers;
