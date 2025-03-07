import { Camera, Clock, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Minimap from './Minimap'

export default function MatchasContactHours() {
  const ourCoords = [51.505, -0.09]
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#eae3d7" }}>
      <Container>
        <Row className="gy-4">
          <Col md={6}>
            <h2 className="display-6 fw-bold mb-4" style={{ color: "#3a5a34" }}>
              Visit Us
            </h2>
            <div className="d-flex flex-column gap4">
              <div className="d-flex">
                <MapPin size={24} className="me-3 flex-shrink-0" style={{ color: "#5a8c51" }} />
                <div>
                  <h3 className="fs-5 fw-bold" style={{ color: "#3a5a34" }}>
                    Address
                  </h3>
                  <p style={{ color: "#5f6e5c" }}>
                    1144 W 4th St, Winston-Salem, NC 27107
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <Phone size={24} className="me-3 flex-shrink-0" style={{ color: "#5a8c51" }} />
                <div>
                  <h3 className="fs-5 fw-bold" style={{ color: "#3a5a34" }}>
                    Phone No.
                  </h3>
                  <p style={{ color: "#5f6e5c" }}>
                    (336) 555-1234
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <Camera size={24} className="me-3 flex-shrink-0" style={{ color: "#5a8c51" }} />
                <div>
                  <h3 className="fs-5 fw-bold" style={{ color: "#3a5a34" }}>
                    Social
                  </h3>
                  <p style={{ color: "#5f6e5c" }}>
                    @matchasteaws
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <Clock size={24} className="me-3 flex-shrink-0" style={{ color: "#5a8c51" }} />
                <div>
                  <h3 className="fs-5 fw-bold" style={{ color: "#3a5a34" }}>
                    Hours
                  </h3>
                  <p className="mb-0" style={{ color: "#5f6e5c" }}>
                    Monday - Friday: 7:00 AM - 8:00 PM
                  </p>
                  <p style={{ color: "#5f6e5c" }}>
                    Saturday - Sunday: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-sm h-100" style={{ minHeight: "300px" }}>
              <Minimap />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}