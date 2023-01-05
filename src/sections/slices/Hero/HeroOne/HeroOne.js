import React from 'react'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import Content from "../../contentStyles"

export default function HeroOne({ data: { titleParagraphImage } }) {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <div className="carousel-inner relative w-full overflow-hidden h-[calc(100vw*9/16-9rem)] min-h-[10rem]">
        {
          titleParagraphImage.map((node, index) => {
            const { title, paragraph, titleHtmlTag, image, imageAlt } = node

            return <div key={index} className={"carousel-item relative float-left w-full h-full " + (index == 0 ? 'active' : '')} >
              <Img className='w-full h-full brightness-50 0' image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" placeholder="blurred" />
              <div className="carousel-caption hidden md:block absolute">
                <Content.Title as={titleHtmlTag} className="!text-secondaryShade text-center">
                  {title}
                </Content.Title>
                <Content.Text as="p" className='!text-lightShade text-center'>
                  {paragraph}
                </Content.Text>
              </div>
            </div>
          })
        }

      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}