import React from 'react'
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap'

export default function MatchasHero() {
  return (
    <section className="position-relative py-5 py-md-6">
      <Container>
        <Row className="align-items-center gy-4">
          <Col md={6}>
            <div className="mb-4">
              <span
                className="d-inline-block rounded-pill px-3 py-1 small fw-medium"
                style={{ backgroundColor: "rgba(90, 140, 81, 0.1)", color: "#5a8c51" }}
              >
                Winston-Salem's Favorite Tea House
              </span>
            </div>
            <h1 className="display-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>
              A <span style={{ color: "#5a8c51" }}>Fresh</span> Take on Asian-Inspired Cuisine
            </h1>
            <p className="fs-5 mb-4" style={{ color: "#5f6e5c" }}>
              Join us for a delightful experience of handcrafted teas and plant-based snacks in a cozy, playful atmosphere.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Nav>
                <Button as={Nav.Link} href="/menu" className="rounded-pill text-white" style={{ backgroundColor: "#5a8c51", borderColor: "#5a8c51" }}>
                  View Our Menu
                </Button>
              </Nav>
              {/* <Button className="rounded-pill" style={{
                backgroundColor: "transparent", borderColor: "#5a8c51", color: "#5a8c51"
              }} >
                Make a Reservation
              </Button> */}
            </div>
          </Col>
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow" style={{ height: "400px" }}>
              <Image
                src="https://cdn.pixabay.com/photo/2023/09/25/07/55/salad-8274421_960_720.jpg"
                alt="Vegetarian dishes and tea"
                fill
                className="object-fit-cover w-100 h-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
