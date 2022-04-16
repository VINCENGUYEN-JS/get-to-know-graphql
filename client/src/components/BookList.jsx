import React from "react";
import { Card, Row, Col } from "antd";
import { useQuery } from "@apollo/client";

import BookDetais from "./BookDetail.jsx";
import { getBooks } from "../graphql-client/queries.js";

function BookList() {
  const { loading, error, data } = useQuery(getBooks);
  const [bookID, setBookID] = React.useState(null);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading</div>;
  }
  return (
    <Row style={{ padding: "12px" }} gutter={15}>
      <Col span={8}>
        <Row gutter={[8, 12]}>
          {data.books.map((book) => (
            <Col span={8}>
              <Card
                onClick={() => {
                  setBookID(book.id);
                }}
              >
                {book.name}
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={16}>
        <BookDetais id={bookID} />
      </Col>
    </Row>
  );
}

export default BookList;
