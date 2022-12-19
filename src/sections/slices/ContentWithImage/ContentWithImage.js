import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'

import Content from "../contentStyles"

export default function ContentWithImage({ data: { contentWithImageTitleParagraphImage } }) {
  const { title, paragraph, titleHtmlTag, image, imageAlt } = contentWithImageTitleParagraphImage

  return (
    <>
      <div className='flex p-4 w-full flex-row flex-wrap md:!flex-nowrap'>
        <div className='max-w-[320px] w-full m-auto md:!m-0'>
          <Img image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" />
        </div>
        <div className='p-4'>
          <Content.Title as={titleHtmlTag}>
            {title}
          </Content.Title>
          <Content.Text>
            {paragraph}
          </Content.Text>
        </div>
      </div>
    </>
  )
}