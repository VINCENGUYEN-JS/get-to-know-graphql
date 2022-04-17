import React from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import { useQuery, useMutation } from "@apollo/client";

import { getAuthors, getBooks } from "../graphql-client/queries";
import { addSingleBook, addSingleAuthor } from "../graphql-client/mutations.js";

const { Option } = Select;

function Forms() {
  const { loading, data, error } = useQuery(getAuthors);

  const [addBook, dataBookMutation] = useMutation(addSingleBook);

  const [addAuthor, dataAuthorMutation] = useMutation(addSingleAuthor);

  const submitBookForm = (values) => {
    addBook({
      variables: {
        name: values.username,
        genre: values.bookgenre,
        authorId: values.author,
      },
      refetchQueries: [
        {
          query: getBooks,
        },
      ],
    });
  };

  const submitAuthorForm = (values) => {
    addAuthor({
      variables: {
        name: values.authorname,
        age: Number(values.authorage),
      },
      refetchQueries: [
        {
          query: getAuthors,
        },
      ],
    });
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <Row>
        <Col span={12}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={submitBookForm}
          >
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
              <Select placeholder="Select Author Name" allowClear>
                {data?.authors?.map((author) => (
                  <Option key={author.id} value={author.id}>
                    {author.name}
                  </Option>
                ))}
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
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            onFinish={submitAuthorForm}
          >
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
