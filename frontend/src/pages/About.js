import { Heart, Leaf, MapPin, Sparkles, Utensils } from 'lucide-react'
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

export default function About() {
  const timeLine = [
    "Matcha's Tea began as a small at-home business, born from a love of high-quality matcha and a passion for plant-based living. Working out of our own kitchen; selling out of our own garage. We crafted vegan snacks for family, friends, and a growing community of tea lovers. What started as our passion project quickly caught on and blew up.",
    "We expanded our doors in the heart of Winston-Salem, North Carolina, continuing our vision: to bring authentic, high-quality, vegan matcha and handcrafted teas to the community. Headed by tea enthusiasts with a passion for modern and cross-cultural flavors, the cafe quickly became a local favorite, offering a cozy atmospheres",
    "As the world around us changed, so did Matcha's Tea. Despite challenges, we adapted; we introduced online ordering, to-go options, and a carefully chosen selection of loose-leaf teas for people like you to enjoy at home. Our commitment to sustainability, cruelty-free ingredients, and health made us a go to spot for health-conscious customers and tea lovers alike.",
    "With growing support from local customers, Matcha's Tea flourished. We redesigned our space to accommodate more guests, creating the most serene tea lounge around. We began collaborating with local artists and other businesses to create a unique and culture filled experience that shifts with the seasons."
  ]
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#eae3d7" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>
                About Us
              </h1>
              <p className="fs-5 mb-0" style={{ color: "#5f6e5c" }}>
                Learn about the history of our teahouse and our locally-sourced ingredients.
              </p>
            </Col>
            <Col lg={6}>
              <div
                className="position-relative rounded-4 overflow-hidden shadow mt-4 mt-lg-0"
                style={{ height: "350px" }}
              >
                <Image
                  src="https://cdn.pixabay.com/photo/2020/11/18/15/49/cafe-5755763_960_720.jpg"
                  alt="Our teahouse interior"
                  fill
                  className="object-fit-cover w-100 h-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={10} lg={8}>
              <div className="text-center mb-5">
                <div
                  className="d-inline-flex rounded-circle p-3 mb-3"
                  style={{ backgroundColor: "rgba(90, 140, 81, 0.1)" }}
                >
                  <Heart size={40} style={{ color: "#5a8c51" }} />
                </div>
                <h2 className="display-6 fw-bold mb-4" style={{ color: "#3a5a34" }}>
                  Our Mission
                </h2>
              </div>

              <div className="fs-5" style={{ color: "#5f6e5c" }}>
                <p>
                  Our main goal is to provide our customers with a high quality vegan dining experience. You may ask, why vegan? Veganism has numerous benefits, including helping with weight loss, lowering blood sugar levels, and lowering risk of heart disease. This is because consuming more plant based foods and less meat or dairy based foods lowers cholesterol levels and A1C levels.
                </p>
                <p>
                  We also wanted a way to spread our Asian culture a bit more, by including traditional dishes and drinks from different Asian cultures—but with a vegan twist!
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4 mt-3">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <Card.Body>
                  <div
                    className="d-inline-flex rounded-circle p-3 mb-3"
                    style={{ backgroundColor: "rgba(90, 140, 81, 0.1)" }}
                  >
                    <Utensils size={28} style={{ color: "#5a8c51" }} />
                  </div>
                  <h3 className="fs-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>
                    Health
                  </h3>
                  <p style={{ color: "#5f6e5c" }}>
                    Our plant-based menu supports heart health, helps manage blood sugar, and provides nutrient-rich
                    options for all dietary needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <Card.Body>
                  <div
                    className="d-inline-flex rounded-circle p-3 mb-3"
                    style={{ backgroundColor: "rgba(90, 140, 81, 0.1)" }}
                  >
                    <Sparkles size={28} style={{ color: "#5a8c51" }} />
                  </div>
                  <h3 className="fs-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>
                    Culture
                  </h3>
                  <p style={{ color: "#5f6e5c" }}>
                    We celebrate diverse Asian culinary traditions through our menu, reimagining classic dishes with
                    plant-based ingredients.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 text-center p-4">
                <Card.Body>
                  <div
                    className="d-inline-flex rounded-circle p-3 mb-3"
                    style={{ backgroundColor: "rgba(90, 140, 81, 0.1)" }}
                  >
                    <MapPin size={28} style={{ color: "#5a8c51" }} />
                  </div>
                  <h3 className="fs-4 fw-bold mb-3" style={{ color: "#3a5a34" }}>
                    Community
                  </h3>
                  <p style={{ color: "#5f6e5c" }}>
                    We're committed to supporting local farms and producers, creating a positive impact in our
                    Winston-Salem community.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" style={{ backgroundColor: "#eae3d7" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={10} lg={8}>
              <div className="text-center mb-5">
                <div
                  className="d-inline-flex rounded-circle p-3 mb-3"
                  style={{ backgroundColor: "rgba(90, 140, 81, 0.1)" }}
                >
                  <Leaf size={40} style={{ color: "#5a8c51" }} />
                </div>
                <h2 className="display-6 fw-bold mb-4" style={{ color: "#3a5a34" }}>
                  Ingredients & Suppliers
                </h2>
              </div>

              <div className="fs-5" style={{ color: "#5f6e5c" }}>
                <p>
                  We always try to have the freshest and healthiest ingredients, which means we source our ingredients locally and utilize in season products. Buying our produce from a local grower ensures that our food is the freshest and tastiest it can be. 
                </p>
                <p>
                  Also, since there is less time in between harvest and you receiving your order, nutritional value decreases significantly less than something that was sourced from a far away state. Along with benefiting the environment, consuming local produce is safer because there is less time for the food to become contaminated. And most of all, buying from local small businesses greatly supports your neighbors! 
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4 mt-3">
            <Col lg={6}>
              <div className="position-relative rounded-4 overflow-hidden shadow h-100" style={{ minHeight: "350px" }}>
                <Image
                  src="https://cdn.pixabay.com/photo/2017/05/20/19/51/potatoes-2329648_960_720.jpg"
                  alt="Local farm produce"
                  fill
                  className="object-fit-cover w-100 h-100"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="h-100 d-flex flex-column justify-content-center">
                <h3 className="fs-4 fw-bold mb-4" style={{ color: "#3a5a34" }}>
                  The Impact of Local Sourcing
                </h3>
                <div className="fs-5" style={{ color: "#5f6e5c" }}>
                  <p>
                    When we source locally, we're not just getting fresher ingredients—we're making a positive impact
                    on multiple levels:
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2">Supporting local farmers and small businesses in our community</li>
                    <li className="mb-2">Reducing carbon emissions from long-distance transportation</li>
                    <li className="mb-2">Preserving nutritional value through shorter time from harvest to plate</li>
                    <li className="mb-2">Promoting seasonal eating and agricultural diversity</li>
                    <li>Creating a more resilient local food system</li>
                  </ul>
                  <p className="mb-0">
                    We're proud to partner with farmers and producers in Winston-Salem whenever possible.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#3a5a34" }}>
              Our Journey
            </h2>
          </div>

          <div className="position-relative timeline-container pb-5">
            <div
              className="position-absolute d-none d-md-block"
              style={{
                width: "2px",
                backgroundColor: "#5a8c51",
                height: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                top: 0,
              }}
            ></div>

            <div
              className="position-absolute d-md-none"
              style={{
                width: "2px",
                backgroundColor: "#5a8c51",
                height: "100%",
                left: "24px",
                top: 0,
              }}
            ></div>

            <div className="timeline-items">
              <Row className="g-4 timeline-item mb-5">
                <Col xs={2} md={5} className="text-md-end">
                  <div className="d-md-none">
                    <div
                      className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#5a8c51",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      <span className="text-white">1</span>
                    </div>
                  </div>

                  <div className="d-none d-md-block">
                    <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "white" }}>
                      <h3 className="fs-5 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                        2018
                      </h3>
                      <p className="mb-0" style={{ color: "#5f6e5c" }}>
                        {timeLine[0]}
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xs={0} md={2} className="text-center d-none d-md-block">
                  <div
                    className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#5a8c51",
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    <span className="text-white">1</span>
                  </div>
                </Col>

                <Col xs={10} md={5}>
                  <div className="d-md-none">
                    <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "white" }}>
                      <h3 className="fs-5 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                        2018
                      </h3>
                      <p className="mb-0" style={{ color: "#5f6e5c" }}>
                        {timeLine[0]}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="g-4 timeline-item mb-5">
                <Col xs={2} md={5}>
                  <div className="d-md-none">
                    <div
                      className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#5a8c51",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      <span className="text-white">2</span>
                    </div>
                  </div>
                </Col>

                <Col xs={0} md={2} className="text-center d-none d-md-block">
                  <div
                    className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#5a8c51",
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    <span className="text-white">2</span>
                  </div>
                </Col>

                <Col xs={10} md={5}>
                  <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "white" }}>
                    <h3 className="fs-5 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                      2019
                    </h3>
                    <p className="mb-0" style={{ color: "#5f6e5c" }}>
                      {timeLine[1]}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="g-4 timeline-item mb-5">
                <Col xs={2} md={5} className="text-md-end">
                  <div className="d-md-none">
                    <div
                      className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#5a8c51",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      <span className="text-white">3</span>
                    </div>
                  </div>

                  <div className="d-none d-md-block">
                    <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "white" }}>
                      <h3 className="fs-5 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                        2020
                      </h3>
                      <p className="mb-0" style={{ color: "#5f6e5c" }}>
                        {timeLine[2]}
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xs={0} md={2} className="text-center d-none d-md-block">
                  <div
                    className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#5a8c51",
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    <span className="text-white">3</span>
                  </div>
                </Col>

                <Col xs={10} md={5}>
                  <div className="d-md-none">
                    <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "white" }}>
                      <h3 className="fs-5 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                        2020
                      </h3>
                      <p className="mb-0" style={{ color: "#5f6e5c" }}>
                       {timeLine[2]}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="g-4 timeline-item">
                <Col xs={2} md={5}>
                  <div className="d-md-none">
                    <div
                      className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#5a8c51",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      <span className="text-white">4</span>
                    </div>
                  </div>
                </Col>

                <Col xs={0} md={2} className="text-center d-none d-md-block">
                  <div
                    className="timeline-marker rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#5a8c51",
                      zIndex: 1,
                      position: "relative",
                    }}
                  >
                    <span className="text-white">4</span>
                  </div>
                </Col>

                <Col xs={10} md={5}>
                  <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "white" }}>
                    <h3 className="fs-5 fw-bold mb-2" style={{ color: "#3a5a34" }}>
                      2022
                    </h3>
                    <p className="mb-0" style={{ color: "#5f6e5c" }}>
                      {timeLine[3]}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
