import React from 'react'
import Content from "../contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function ContentPlain({ data: { titleMarkdown } }) {
  const { title, markdown, titleHtmlTag } = titleMarkdown;

  return (
    <>
      <div className='flex p-4 w-full flex-col flex-wrap container'>
        <Content.Title as={titleHtmlTag} className="text-center">
          {title}
        </Content.Title>
        <ReactMarkdown className={'app-markdown'} rehypePlugins={[rehypeRaw]}  children={markdown.data.markdown} />
      </div>
    </>
  )
}