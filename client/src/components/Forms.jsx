import React from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";

const { Option } = Select;

function Forms() {
  return (
    <div style={{ marginTop: "16px" }}>
      <Row>
        <Col span={12}>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Form.Item
              label="Book Name"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your bookName!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Book Genre"
              name="bookgenre"
              rules={[
                {
                  required: true,
                  message: "Please input your book Genre!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Select author"
              name="author"
              rules={[
                {
                  required: true,
                  message: "Please select your authors!",
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Add book
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
            <Form.Item
              label="Author name"
              name="authorname"
              rules={[
                {
                  required: true,
                  message: "Please input your authorName!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Author age"
              name="authorage"
              rules={[
                {
                  required: true,
                  message: "Please input your authorAge!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Add Author
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Forms;
