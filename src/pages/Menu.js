import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import menu from '../menu.json'
import MatchasMenuCard from '../components/MatchasMenuCard'

export default function Menu() {

  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#eae3d7" }}>
        <Container>
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>
              Our Menu
            </h1>
            <p className="fs-5 mx-auto" style={{ maxWidth: "800px", color: "#5f6e5c" }}>
              Explore our selection of plant-based snacks and exceptional drinks, crafted with locally-sourced ingredients and served with love.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          {menu.categories.map(({ name: categoryName, items }) => (
            <div key={categoryName} className="mb-5">
              <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2" style={{ color: "#3a5a34" }}>
                {categoryName}
              </h3>
              <Row className="g-4">
                {items.map((item, index) => (
                  <Col key={`${categoryName}-${index}`} md={6} lg={4}>
                    <MatchasMenuCard item={item} fullMode />
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