import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { api } from "../api";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";

const AddForm = () => {

  const {register, handleSubmit, watch, formState : {errors}} = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmit = async data => {
    setIsLoading(true)
    data = {id : uuidv4(), ...data}
    const res = await api.post('/blogs', data)
    setIsLoading(false)
    navigate('/')

    // console.log(res)
  }
  return (
    <Container style={{
      marginTop : "100px"
     }}>
      <Row>
        <Col md="8" className="mx-auto">
          <Card>
            <Card.Header>Add New Blog</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                  className="mb-3"
                  controlId="blog.title"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter Title" {...register("title", {required : true})} />
                </Form.Group>
                {errors.title && <p className="text-danger" role="alert">Title is requried</p>}
                <Form.Group
                  className="mb-3"
                  controlId="blog.description"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} {...register("description", {required : true})} />
                </Form.Group>
                {errors.description && <p className="text-danger" role="alert">Description is requried</p>}
                {
                  isLoading ? 
                  <Button type="submit" variant="dark" disabled>Add Blog</Button>
                  :
                  <Button type="submit" variant="dark">Add Blog</Button>
                }
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddForm;
