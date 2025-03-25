import React from 'react'
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router'

export default function MatchasAboutBlurb() {
  return (
    <section className="py-5" style={{ backgroundColor: "#eae3d7" }}>
      <Container>
        <Row className="align-items-center gy-4">
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow" style={{ height: "400px" }}>
              <Image
                src=""
                alt="Our cafe interior"
                fill
                className="object-fit-cover"
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="display-6 fw-bold mb-4" style={{ color: "#3a5a34" }}>
              Our Story
            </h2>
            <p className="fs-5 mb-3" style={{ color: "#5f635c" }}>
              We are an Asian inspired cafe located in the heart of Winston-Salem. We started as an at home business selling teas and desserts and later expanded to establish our own building. 
            </p>
            <p className="fs-5 mb-4" style={{ color: "#5f635c" }}>
                We believe in clean, healthy, and ethically sourced ingredients. By using local and plant based products, not only do you experience delicious food and drinks, you can rest easy knowing that what you're consuming is all natural and cruelty free. 
            </p>
            <Nav>
              <Button as={Link} to="/about" className="rounded-pill" style={{ backgroundColor: "transparent", borderColor: "#5a8c51", color: "#5a8c51" }}>
                Learn More About Us
              </Button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
