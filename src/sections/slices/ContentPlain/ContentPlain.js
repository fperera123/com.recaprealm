import React from 'react'
import Content from "../contentStyles"

export default function ContentPlain() {
  return (
    <>
      <div className='flex p-4 w-full flex-row flex-wrap'>
        <div className='p-4'>
          <Content.Title as="h1">
            Get instant  growth result for business.
          </Content.Title>
          <Content.Text>
            Create custom landing pages
            with Fastland that converts more visitors than any website. Easy, Reliable &amp; Fast. The best medicines &amp; biggest brands within 30 minutes at your home.
          </Content.Text>
        </div>
      </div>
    </>
  )
}