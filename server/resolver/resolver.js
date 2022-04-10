const { books, authors } = require("../data/static.js");

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === Number(args.id)),
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => author.id === Number(args.id)),
  },
};

module.exports = resolvers;
