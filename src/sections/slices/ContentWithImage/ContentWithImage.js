import React from 'react'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Content from "../contentStyles"

const renderImage = ({ imageAlt,
  imageOrder,
  imageTitle,
  image }, order) => {
  if (imageOrder == order) {
    return <div className='max-w-[640px] w-full rounded-md border-secondaryShade border-solid border-6 m-auto md:!m-0'>
      <Img image={getImage(image.localFile)} alt={imageAlt} title={imageTitle} layout="fullWidth" placeholder="blurred" />
    </div>
  }
  else {
    return null;
  }
}

export default function ContentWithImage({ data: { contentWithImageTitleMarkdown, contentWithImageBasicImage } }) {
  const { title, markdown, titleHtmlTag } = contentWithImageTitleMarkdown

  return (
    <>
      <div className='container flex py-16 w-full flex-row flex-wrap items-center md:!flex-nowrap'>

        {renderImage(contentWithImageBasicImage, 'first')}

        <div className='p-4'>
          <Content.Title as={titleHtmlTag}>
            {title}
          </Content.Title>
          <ReactMarkdown className={'app-markdown'} rehypePlugins={[rehypeRaw]} children={markdown.data.markdown} />
        </div>

        {renderImage(contentWithImageBasicImage, 'last')}
      </div>
    </>
  )
}