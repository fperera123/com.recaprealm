import React from 'react'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Content from "../contentStyles"

export default function ContentWithImageAndList({ data: { contentWithImageTitleMarkdownImage, unorderedList, sliceWidth } }) {
  const { title, markdown, titleHtmlTag, image, imageAlt } = contentWithImageTitleMarkdownImage
  return (
    <>
      <div className={'flex w-full px-4 py-16 flex-col flex-wrap items-center min-w-[300px] sm:inline-flex ' + 'sm:' + sliceWidth}>
        <div className="mb-2">
          <Content.Title as={titleHtmlTag} className='text-center'>
            {title}
          </Content.Title>
          <ReactMarkdown className={'app-markdown max-w-[600px]'} rehypePlugins={[rehypeRaw]}  children={markdown.data.markdown} />
        </div>
        <div className='w-full max-w-[640px] max-h-[640px] overflow-hidden rounded-md border-secondaryShade border-solid border-6 mb-2'>
          <Img className='w-full h-full' image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" placeholder="blurred" />
        </div>
        <div>
          <Content.List className='flex flex-col'>
            {unorderedList.map((item, index) => {
              return <div key={index} className='inline-flex items-center mb-4'>
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