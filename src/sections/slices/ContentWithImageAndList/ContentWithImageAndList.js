import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import Content from "../contentStyles"

export default function ContentWithImageAndList({ data: { contentWithImageTitleParagraphImage, unorderedList } }) {
  const { title, paragraph, titleHtmlTag, image, imageAlt } = contentWithImageTitleParagraphImage
  return (
    <>
      <div className='flex p-4 w-full flex-col flex-wrap max-w-[50%] min-w-[300px] items-center'>
        <div className="mb-2 text-center">
          <Content.Title as={titleHtmlTag}>
            {title}
          </Content.Title>
          <Content.Text>
            {paragraph}
          </Content.Text>
        </div>
        <div className='w-full m-auto max-w-[640px] mb-2'>
          <Img image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" />
        </div>
        <div>
          <Content.List>
            {unorderedList.map((item, index) => {
              return <li key={index}>{item.text}</li>
            })}
          </Content.List>
        </div>
      </div>
    </>
  )
}