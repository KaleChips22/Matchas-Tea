import { Leaf } from 'lucide-react'
import React from 'react'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'

export default function MatchasFooter({ navLinks }) {
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#5a8c51" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="text-center">
                <h2 className="display-6 fw-bold mb-3 text-white">
                  Join Our Community
                </h2>
                <p className="mb-4 text-white-50">
                  Subscribe to our newsletter for seasonal menu updates, event announcements, and exclusive offers.
                </p>
                <Form className="d-flex flex-column flex-sm-row gap-2">
                  <Form.Control type="email" placeholder="Your email address" className="rounded-pill" />
                  <Button className="rounded-pill" style={{ backgroundColor: "#3a5a34", borderColor: "#3a5a34" }}>
                    Subscribe
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="py-5 text-white" style={{ backgroundColor: "#3a5a34" }}>
        <Container>
          <Row className="gy-4 gx-5">
            <Col md={3}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <Leaf size={24} />
                <span className="fs-4 fw-bold">Matcha's Tea</span>
              </div>
              <p className="text-white-50">
                A vegetarian teahouse and cafe serving Winston-Salem with fresh, plant-based cuisine based on an Asian-inspired theme.
              </p>
            </Col>
            <Col md={3}>
              <h3 className="fs-5 fw-bold mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                <Nav className="d-flex flex-column m-0 p-0">
                  {navLinks.map(item => (
                    <li key={item} className="mb-2">
                      <Nav.Link href={item.toLowerCase()} className="text-decoration-none text-white-50">
                        {item}
                      </Nav.Link>
                    </li>
                  ))}
                </Nav>
              </ul>
            </Col>
            <Col md={3}>
              <h3 className="fs-5 fw-bold mb-3">Policies</h3>
              <ul className="list-unstyled">
                {["Privacy Policy", "Terms of Service"].map(item => (
                  <li key={item} className="mb-2">
                    <p className="text-decoration-none text-white-50">
                      {item}
                    </p>
                  </li>
                )) }
              </ul>
            </Col>
            <Col md={3}>
              <h3 className="fs-5 fw-bold mb-3">Connect With Us</h3>
              <p className="text-white-50"><span className="fst-italic">@matchasteaws</span> on all platforms</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
