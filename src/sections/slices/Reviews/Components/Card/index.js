import React from 'react'
import Card from './style'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'

export default function TestimonialCard({ customerName, customerPosition, text, image, imageAlt, ...rest }) {
  return (
    <Card backgroundColor="#fff">
      <Card.Image>
        <Img image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" />
      </Card.Image>
      <Card.Body fontColor="#262729">
        <Card.Text>{text}</Card.Text>
        <Card.UserBlock>
          <Card.UserInfo mr="15px" mb="15px">
            <Card.Title as="h3">{customerName}</Card.Title>
            <Card.UserPosition>{customerPosition}</Card.UserPosition>
          </Card.UserInfo>
        </Card.UserBlock>
      </Card.Body>
    </Card>
  )
}