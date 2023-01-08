import React from 'react'
import Card from './style'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'

export default function TestimonialCard({ customerName, customerPosition, text, image, imageAlt, ...rest }) {
  return (
    <Card className='bg-lightShade'>
      {/* <Card.Image className="w-[4rem] h-[4rem] rounded-full overflow-hidden">
        <Img image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" />
      </Card.Image> */}
      <Card.Body>
        <Card.Text as="p">{text}</Card.Text>
        <Card.UserBlock>
          <Card.UserInfo mr="15px" mb="15px">
            <Card.Text as="p" className='font-bold mb-0'>{customerName}</Card.Text>
            <Card.UserPosition>{customerPosition}</Card.UserPosition>
          </Card.UserInfo>
        </Card.UserBlock>
      </Card.Body>
    </Card>
  )
}