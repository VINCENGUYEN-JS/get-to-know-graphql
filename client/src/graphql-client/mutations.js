import { gql } from "@apollo/client";

const addSingleBook = gql`
  mutation addSingleBook($name: String, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
    }
  }
`;

const addSingleAuthor = gql`
  mutation addSingleAuthor($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

export { addSingleBook, addSingleAuthor };
