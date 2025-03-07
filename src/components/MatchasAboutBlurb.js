import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum ipsam eveniet excepturi nihil mollitia reiciendis, unde in perferendis enim debitis sunt aspernatur autem molestias rem dolorum explicabo eligendi, alias aliquam asperiores labore! Dolor, minima.
            </p>
            <p className="fs-5 mb-4" style={{ color: "#5f635c" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum ipsam eveniet excepturi nihil mollitia reiciendis, unde in perferendis enim debitis sunt aspernatur autem molestias rem dolorum explicabo eligendi, alias aliquam asperiores labore! Dolor, minima.
            </p>
            <Button className="rounded-pill" style={{ backgroundColor: "transparent", borderColor: "#5a8c51", color: "#5a8c51" }}>
              Learn More About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
