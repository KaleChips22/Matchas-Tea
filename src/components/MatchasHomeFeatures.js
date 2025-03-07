import { Card, Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { Clock, Leaf, MapPin } from 'lucide-react'

export default function MatchasHomeFeatures() {
  const features = [
    {
      icon: <Leaf size={40} style={{ color: "#5a8c51" }} />,
      title: "Plant-Based Goodness",
      description: "Our menu features 100% vegetarian dishes made with locally-sourced, seasonal ingredients."
    },
    {
      icon: <Clock size={40} style={{ color: "#5a8c51" }} />,
      title: "Artisinal Drink Selection",
      description: "Explore our collection of drinks such as teas, coffee, espresso, and more, from across Asia."
    },
    {
      icon: <MapPin size={40} style={{ color: "#5a8c51" }} />,
      title: "Cozy Atmosphere",
      description: "Our space is designed to be your home away from home in the heart of Winston-Salem."
    }
  ]

  return (
    <section className="py-5" style={{ backgroundColor: "#eae3d7" }}>
      <Container>
        <Row className="g-3">
          {features.map((feature, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 p-3">
                <Card.Body>
                  <div
                    className="d-inline-flex rounded-circle p-3 mb-3"
                    style={{ backgroundColor: "rgba(90, 140, 81, 0.1)" }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="fs-4 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: "#5f6e5c" }}>{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
