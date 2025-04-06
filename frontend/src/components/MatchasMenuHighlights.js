import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import React from 'react'
import menu from '../menu.json'
import { getMenuItems, randomN } from '../util'
import { ArrowRight } from 'lucide-react'
import MatchasMenuCard from './MatchasMenuCard'

export default function MatchasMenuHighlights() {
  let menuHighlights = randomN(6, getMenuItems(menu))

  return (
    <section id="menu-highlights" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3" style={{ color: "#3a5a34" }}>
            Our Menu Highlights
          </h2>
          <p className="fs-5" style={{ color: "#5f635c" }}>
            A taste of what we offer at Matcha's Tea
          </p>
        </div>

        <Row className="g-4">
          {menuHighlights.map((item, index) => (
            <Col key={index} md={6} lg={4}>
              <MatchasMenuCard item={item} showCategory />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Nav className="d-flex justify-content-center">
            <Button as={Nav.Link} href="/menu" className="rounded-pill text-white" style={{ backgroundColor: "#5a8c51", borderColor: "#5a8c51" }}>
              View Full Menu <ArrowRight className="ms-2" size={16} />
            </Button>
          </Nav>
        </div>
      </Container>
    </section>
  )
}
