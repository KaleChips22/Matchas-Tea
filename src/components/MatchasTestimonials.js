import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import testimonials from '../testimonials.json'
import { randomN } from '../util'

export default function MatchasTestimonials() {
  const reviews = randomN(3, testimonials.reviews)

  const getPercent = i => {
    return i == 2 ? 100 / (4 * testimonials.reviews.length + 1) : 100 * testimonials.reviews.filter(r => r.stars == i).length / (testimonials.reviews.length + 1)
  }

  const getNum = i => {
    return i == 2 ? 1 : testimonials.reviews.filter(r => r.stars == i).length * 4
  }

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
          <Card className="h-100 border-0 shadow-sm rounded-4 p-3">
            <Card.Body>
              {([5, 4, 3, 2, 1]).map((i) => (
                <div className='p-1 d-flex align-items-center justify-content-bewteen gap-4'>
                  <span key={i} className='fs-4' style={{ color: "#3a5a34" }}>
                    {i}★
                  </span>
                  <div className='rounded-pill overflow-hidden w-100' style={{ backgroundColor: '#dae0d9', height: '24px' }}>
                    <div className='h-100 rounded-pill' style={{ width: getPercent(i) + '%', backgroundColor: '#5a8c51' }} />
                  </div>
                  <span key={i} className='fs-6' style={{ color: "#5f6e5c" }}>
                    ({getNum(i)})
                  </span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  )
}