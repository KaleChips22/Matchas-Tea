import React, { useState } from 'react'
import { Leaf, MenuIcon } from "lucide-react"
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Link } from 'react-router'

export default function MatchasNavbar({ navLinks }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleShow = () => setShowMenu(true)
  const handleClose = () => setShowMenu(false)

  return (
    <Navbar
        expand="md"
        className="sticky-top py-3"
        style={{ backgroundColor: "rgba(248, 245, 240, 0.8)", backdropFilter: "blur(8px)" }}
      >
      <Container>
        <Nav>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Leaf className="me-2" size={24} style={{ color: "#5a8c51" }} />
            <span className="fw-bold fs-4" style={{ color: "#3a5a34" }}>
              Matcha's Tea
            </span>
          </Navbar.Brand>
          </Nav>

          <Button variant="link" className="d-md-none p-0 border-0" onClick={handleShow} aria-label="Toggle menu">
            <MenuIcon size={24} style={{ color: "#3a5a34" }} />
          </Button>

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-md-flex">
            <Nav className="ms-auto align-items-center">
              {navLinks.map((item) => (
                <Link key={item} to={item.toLowerCase()} className="mx-2 text-decoration-none" style={{ color: "#3a5a34" }}>
                  {item}
                </Link>
              ))}
              <Button as={Link} to="/order" className="ms-2 rounded-pill" style={{ backgroundColor: "#5a8c51", borderColor: "#5a8c51" }}>
                Order Online
              </Button>
            </Nav>
          </Navbar.Collapse>

          <Offcanvas show={showMenu} onHide={handleClose} placement="end" style={{ backgroundColor: "f8f5f0" }}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <div className="d-flex flex-column gap-4 pt-3">
                <Nav>
                  {navLinks.map((item) => (
                    <Link
                      key={item}
                      to={item.toLowerCase()}
                      className="fs-4 fw-medium text-decoration-none my-2"
                      style={{ color: "#3a5a34" }}
                      onClick={handleClose}
                    >
                      {item}
                    </Link>
                  ))}
                  <Button as={Link} to="/order" className="mt-3 rounded-pill" style={{ backgroundColor: "#5a8c51", borderColor: "#5a8c51" }}>
                    Order Online
                  </Button>
                </Nav>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
  )
}
