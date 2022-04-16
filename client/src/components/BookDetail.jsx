import React from "react";
import { Card } from "antd";

function BookDetail() {
  return (
    <div className="book-details">
      <Card>
        <p>VIP IN THE BACK</p>
        <p>Phong Su</p>
        <p>Age : 90</p>
        <p>All books by this author</p>
        <ul>
          <li>So Do</li>
          <li>Ky nghe lay tay</li>
        </ul>
      </Card>
    </div>
  );
}

export default BookDetail;
