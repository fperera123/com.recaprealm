import React from 'react'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Content from "../contentStyles"

export default function ContentWithImage({ data: { contentWithImageTitleMarkdownImage } }) {
  const { title, markdown, titleHtmlTag, image, imageAlt } = contentWithImageTitleMarkdownImage
  return (
    <>
      <div className='container flex p-4 w-full flex-row flex-wrap items-center md:!flex-nowrap'>
        <div className='max-w-[640px] w-full rounded-md border-secondaryShade border-solid border-6 m-auto md:!m-0'>
          <Img image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" />
        </div>
        <div className='p-4'>
          <Content.Title as={titleHtmlTag}>
            {title}
          </Content.Title>
          <ReactMarkdown className={'app-markdown'} rehypePlugins={[rehypeRaw]}  children={markdown.data.markdown} />
        </div>
      </div>
    </>
  )
}