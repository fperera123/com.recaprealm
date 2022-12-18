import React from 'react'
import Content from "../contentStyles"

export default function ContentPlain({ data: { titleParagraph } }) {
  const { title, paragraph, titleHtmlTag } = titleParagraph;
  return (
    <>
      <div className='flex p-4 w-full flex-row flex-wrap'>
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