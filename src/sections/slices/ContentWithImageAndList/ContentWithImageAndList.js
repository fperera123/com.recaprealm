import React from 'react'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import Content from "../contentStyles"

export default function ContentWithImageAndList({ data: { contentWithImageTitleParagraphImage, unorderedList } }) {
  const { title, paragraph, titleHtmlTag, image, imageAlt } = contentWithImageTitleParagraphImage
  return (
    <>
      <div className='container flex p-4 w-full flex-col flex-wrap max-w-[50%] min-w-[300px] items-center'>
        <div className="mb-2">
          <Content.Title as={titleHtmlTag} className='text-center'>
            {title}
          </Content.Title>
          <Content.Text as='p' className='text-center'>
            {paragraph}
          </Content.Text>
        </div>
        <div className='w-full max-w-[640px] max-h-[640px] overflow-hidden rounded-md border-secondaryShade border-solid border-6 mb-2'>
          <Img className='w-full h-full' image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" />
        </div>
        <div>
          <Content.List className='flex flex-col'>
            {unorderedList.map((item, index) => {
              return <div className='inline-flex items-center mb-4'>
                <i className='fal fa-badge-check text-2xl !text-primary'></i>
                <li className='text-lg' key={index}>{item.text}</li>
              </div>
            })}
          </Content.List>
        </div>
      </div>
    </>
  )
}