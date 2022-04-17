import React from "react";
import { Card } from "antd";
import { useQuery } from "@apollo/client";

import { getBook } from "../graphql-client/queries.js";

function BookDetail({ id }) {
  const { loading, error, data } = useQuery(getBook, {
    variables: { id: id },
    skip: id === null,
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading</div>;
  }

  const book = id !== null ? data?.book : null;

  return (
    <div className="book-details">
      <Card>
        {!book ? (
          "Please Select a book"
        ) : (
          <>
            <p>Name: {book.name}</p>
            <p>Genre: {book.genre}</p>
            <p>
              Author: {book.author.name} --- Age: {book.author.age}
            </p>
            <p>Same Author</p>
            <ul>
              {book.author.books.map((book) => (
                <li>{book.name}</li>
              ))}
            </ul>
          </>
        )}
      </Card>
    </div>
  );
}

export default BookDetail;
