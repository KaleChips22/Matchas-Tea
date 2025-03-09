import { Leaf } from 'lucide-react'
import React, { useRef } from 'react'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import useLocalStorage from '../hooks/useLocalStorage'

export default function MatchasFooter({ navLinks }) {
  const [submittedEmail, setSubmittedEmail] = useLocalStorage('matchas-emailsent', false)

  // console.log(submittedEmail)

  const emailRef = useRef()

  function handleSubmitEmail(e) {
    e.preventDefault()

    setSubmittedEmail(true)
    localStorage.setItem('matchas-email', emailRef.current.value)
  }

  function handleUnsubscribe(e) {
    e.preventDefault()

    setSubmittedEmail(false)
    localStorage.removeItem('matchas-email')
  }

  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#5a8c51" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="text-center">
                <h2 className="display-6 fw-bold mb-3 text-white">
                  {!submittedEmail ? 'Join Our Community' : 'Thanks for  your Support!'}
                </h2>
                <p className="mb-4 text-white-50">
                  {!submittedEmail ? 'Subscribe to our newsletter for seasonal menu updates, event announcements, and exclusive offers.' : `We will send you our weekly newsletter to ${localStorage.getItem('matchas-email')}`}
                </p>
                {!submittedEmail ? (
                  <Form className="d-flex flex-column flex-sm-row gap-2" onSubmit={handleSubmitEmail}>
                    <Form.Control type="email" placeholder="Your email address" className="rounded-pill" ref={emailRef} />
                    <Button className="rounded-pill" type="submit" style={{ backgroundColor: "#3a5a34", borderColor: "#3a5a34" }}>
                      Subscribe
                    </Button>
                  </Form>
                ) : (
                  <Form className="d-flex flex-column flex-sm-row gap-2 align-items-center justify-content-center" onSubmit={handleUnsubscribe}>
                    <Button className="rounded-pill" type="submit" style={{ backgroundColor: "#3a5a34", borderColor: "#3a5a34" }}>
                      Unsubscribe
                    </Button>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="py-5 text-white" style={{ backgroundColor: "#3a5a34" }}>
        <Container>
          <Row className="gy-4 gx-5 mb-3">
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
          <div className="text-center text-white-50">
            <p>
              &copy; 2025 Matcha's Tea. All Rights Reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}
