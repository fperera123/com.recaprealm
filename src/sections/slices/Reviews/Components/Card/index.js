import React from 'react'
import Card from './style'
export default function TestimonialCard({ userName, userPosition, text, image, ...rest }) {
  return (
    <Card backgroundColor="#fff">
      <Card.Image>
        <img src={image} alt="Testimonial" />
      </Card.Image>
      <Card.Body fontColor="#262729">
        <Card.Text>{text}</Card.Text>
        <Card.UserBlock>
          <Card.UserInfo mr="15px" mb="15px">
            <Card.Title as="h3">{userName}</Card.Title>
            <Card.UserPosition>{userPosition}</Card.UserPosition>
          </Card.UserInfo>
        </Card.UserBlock>
      </Card.Body>
    </Card>
  )
}