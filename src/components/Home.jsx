import React from 'react'
import Blog from './Blog'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <Container fluid style={{
        marginTop : '30px'
     }}>
        <Row>
            <Col xs md="6" lg="3" className='my-3'>
                <Blog />
            </Col>
            <Col xs md="6" lg="3" className='my-3'>
                <Blog />
            </Col>
            <Col xs md="6" lg="3" className='my-3'>
                <Blog />
            </Col>
            <Col xs md="6" lg="3" className='my-3'>
                <Blog />
            </Col>
        </Row>
    </Container>
  )
}

export default Home
