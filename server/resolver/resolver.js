const resolvers = {
  /**Query Data */
  Query: {
    books: async (parent, args, context) =>
      await context.mongoDataMethods.getAllBooks(),
    book: async (parent, args, context) =>
      await context.mongoDataMethods.getBookById(args.id),
    authors: async (parent, args, context) =>
      await context.mongoDataMethods.getAllAuthors(),
    author: async (parent, args, context) =>
      await context.mongoDataMethods.getAuthorById(args.id),
  },
  Book: {
    author: async (parent, args, context) =>
      await context.mongoDataMethods.getAuthorById(parent.authorId),
  },
  Author: {
    books: async (parent, args, context) =>
      await context.mongoDataMethods.getAllBooks({ authorId: parent.id }),
  },
  /**Mutation Data */
  Mutation: {
    createAuthor: async (parent, args, context) => {
      return await context.mongoDataMethods.createAuthor(args);
    },
    createBook: async (parent, args, context) => {
      return await context.mongoDataMethods.createBook(args);
    },
  },
};

module.exports = resolvers;
