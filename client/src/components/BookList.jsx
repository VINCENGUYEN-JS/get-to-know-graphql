import React from "react";
import { Card, Row, Col } from "antd";

import BookDetais from "./BookDetail.jsx";

function BookList() {
  return (
    <Row style={{ padding: "12px" }} gutter={15}>
      <Col span={8}>
        <Row gutter={[8, 12]}>
          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>
          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>
          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>

          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>
          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>
          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>

          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>
          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>
          <Col span={8}>
            <Card>VIP IN THE BACK</Card>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <BookDetais />
      </Col>
    </Row>
  );
}

export default BookList;
