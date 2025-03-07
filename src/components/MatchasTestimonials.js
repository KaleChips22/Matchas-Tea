import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import testimonials from '../testimonials.json'
import { randomN } from '../util'

export default function MatchasTestimonials() {
  const reviews = randomN(3, testimonials.reviews)

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: "#3a5a34" }}>
            What Our Customers Say
          </h2>
        </div>

        <Row className="g-4">
          {reviews.map((testimonial, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 p-3">
                <Card.Body>
                  <div className="mb-3" style={{ color: "#5a8c51" }}>
                    {Array(Math.floor(testimonial.stars)).fill(0).map((_, i) => (
                      <span key={i} className="fs-4">
                        ★
                      </span>
                    ))}
                    {Array(5 - Math.floor(testimonial.stars)).fill(0).map((_, i) => (
                      <span key={i} className="fs-4">
                        ☆
                      </span>
                    ))}
                  </div>
                  <p className="mb-3 fst-italic" style={{ color: "#5f6e5c" }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="fw-bold mb-0" style={{ color: "#3a5a34" }}>
                      {testimonial.author}
                    </p>
                    <p className="small mb-0" style={{ color: "#5f6e5c" }}>
                      {testimonial.role}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}