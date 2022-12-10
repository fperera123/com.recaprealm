import React from 'react'
import TestiomialCard from './Components/Card'
import { Images } from "~data"
import Testimonial from './style'
import { Col, Container, Row } from 'react-bootstrap'
export default function TestimonialSection() {
  return (
    <Testimonial backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard image={Images.agency.testiMonialUserimg1} text="@Fastland is great for creating landing pages within minutes! It actually takes less time." userName="Angela Park" userPosition="CEO at Orbital" />
          </Col>
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard image={Images.agency.testiMonialUserimg2} text="@Fastland is great for creating landing pages within minutes! It actually takes less time." userName="Angela Park" userPosition="CEO at Orbital" />
          </Col>
          <Col className="col-xl-4 col-md-6">
            <TestiomialCard image={Images.agency.testiMonialUserimg3} text="@Fastland is great for creating landing pages within minutes! It actually takes less time." userName="Angela Park" userPosition="CEO at Orbital" />
          </Col>
        </Row>
      </Container>
    </Testimonial>
  )
}