import React from 'react'
import Content from "../contentStyles"

export default function ContentPlain({ data: { titleParagraph } }) {
  const { title, paragraph, titleHtmlTag } = titleParagraph;
  return (
    <>
      <div className='flex p-4 w-full flex-col flex-wrap'>
        <Content.Title as={titleHtmlTag} className="text-center">
          {title}
        </Content.Title>
        <Content.Text as="p" className='text-justify'>
          {paragraph}
        </Content.Text>
      </div>
    </>
  )
}