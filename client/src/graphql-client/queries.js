import { gql } from "@apollo/client";

const getBooks = gql`
  query getBookQuery {
    books {
      name
      genre
      id
      author {
        name
        age
      }
    }
  }
`;

const getBook = gql`
  query getSingleBook($id: ID!) {
    book(id: $id) {
      name
      genre
      id
      author {
        name
        age
        id
        books {
          id
          name
        }
      }
    }
  }
`;

const getAuthors = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`;

export { getBooks, getBook, getAuthors };
