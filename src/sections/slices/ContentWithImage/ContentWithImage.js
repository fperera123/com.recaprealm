import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StaticImage as Img } from "gatsby-plugin-image"
import Content from "../contentStyles"

export default function ContentWithImage() {
  return (
    <>
      <div className='flex p-4 w-full flex-row flex-wrap md:!flex-nowrap'>
        <div className='max-w-[320px] w-full m-auto md:!m-0'>
          <Img
            src="./../../../assets/image/marketing/l1-contentOne-img-woman.png"
            layout="fullWidth"
            alt="content image"
          />
        </div>
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