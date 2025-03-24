import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Reference() {
  const referencesByCategory = {
    framework: [
      {
        name: "React",
        description: "A JavaScript library for building user interfaces. The core foundation of our website that enables us to create interactive components.",
        url: "https://reactjs.org/"
      }
    ],
    design: [
      {
        name: "Bootstrap",
        description: "A popular CSS framework that provides responsive design components. Used for the layout and styling of our website. \n The templates and themes used in this website we created solely by our team.",
        url: "https://getbootstrap.com/"
      },
      {
        name: "Lucide React",
        description: "A beautiful & consistent icon set as React components. Used for all the icons across our website.",
        url: "https://lucide.dev/"
      }
    ],
    studentResources: [
      {
        name: "Student Copyright Checklist",
        description: "",
        url: "/resources/tsa/Student_Copyright_Checklist.pdf"
      },
      {
        name: "Student Work Log",
        description: "",
        url: "/resources/tsa/Student_Work_Log.pdf"
      },
    ]
  }

  const categoryTitles = {
    framework: "Frameworks",
    design: "Design Resources",
    studentResources: "Student Resources"
  }

  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#eae3d7" }}>
        <Container>
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>References</h1>
          </div>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          {Object.entries(referencesByCategory).map(([category, refs]) => (
            <div key={category} className="mb-5">
              <h2 className="fs-3 fw-bold mb-4" style={{ color: "#3a5a34 " }}>
                {categoryTitles[category]}
              </h2>
              <Row className="g-4">
                {refs.map((reference, index) => (
                  <Col key={index} md={6} lg={4}>
                    <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h3 className="fs-4 fw-bold mb-0" style={{ color: "#5a8c51" }}>
                            {reference.name}
                          </h3>
                          <Button
                            as="a"
                            href={reference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex align-items-center p-2 rounded-circle"
                            style={{ borderColor: "#5a8c51", color: "#5a8c51", backgroundColor: "transparent" }}
                            aria-label={`Visit ${reference.name} website`}
                          >
                            <ArrowRight size={18} />
                          </Button>
                        </div>
                        <p className="mb-0">
                          {reference.description}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
