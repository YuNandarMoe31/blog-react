import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = ({ blog }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.description}</Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
};

export default Blog;
