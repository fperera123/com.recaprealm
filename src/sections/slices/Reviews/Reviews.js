import React from 'react'
import TestimonialCard from './Components/Card'
import { Images } from "~data"
import Testimonial from './style'
import { Col, Container, Row } from 'react-bootstrap'
export default function TestimonialSection({ data: { reviewOneItem } }) {
  return (
    <Testimonial className='bg-primaryShade'>
      <Container>
        <Row className="justify-content-center">
          {
            reviewOneItem.map((item, index) => {
              return <Col key={index} className="col-xl-4 col-md-6">
                <TestimonialCard image={item.image} imageAlt={item.imageAlt} text={item.text} customerName={item.customerName} customerPosition={item.customerPosition} />
              </Col>
            })
          }
        </Row>
      </Container>
    </Testimonial>
  )
}