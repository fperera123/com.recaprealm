import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StaticImage as Img } from "gatsby-plugin-image"
import Content from "../contentStyles"

export default function ContentWithImageAndList() {
  return (
    <>
      <div className='flex p-4 w-full flex-col flex-wrap max-w-[50%] min-w-[300px] items-center'>
        <div className="mb-2 text-center">
          <Content.Title as="h1">
            Get instant  growth result for business.
          </Content.Title>
          <Content.Text>
            Create custom landing pages
            with Fastland that converts more visitors than any website. Easy, Reliable &amp; Fast. The best medicines &amp; biggest brands within 30 minutes at your home.
          </Content.Text>
        </div>
        <div className='w-full m-auto max-w-[640px] mb-2'>
          <Img
            src="./../../../assets/image/home-startup/about-us-img.png"
            layout="fullWidth"
            alt="content image"
          />
        </div>
        <div>
          <Content.List>
            <li>Entrepreneual facilitation</li>
            <li>Development of Financial Models</li>
            <li>Feasibility Studies &amp; Business Plans</li>
            <li>Valuation Services</li>
          </Content.List>
        </div>
      </div>
    </>
  )
}