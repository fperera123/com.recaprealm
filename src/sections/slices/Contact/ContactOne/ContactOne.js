import React from 'react'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import Content from "../../contentStyles"

export default function ContactOne({ data: { titleParagraphImage } }) {
    return (
        <div className="grid grid-cols-2">
            <div class="w-full h-[400px]">
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="w-full">
                <div className='text-center'>
                    FLOOR 2 OFFICE No 6<br />
                    HAWALLY BLOCK 3,<br />
                    STREET No 101<br />
                    TUNISIA STREET,<br />
                    FIRDOUS BUILDING,<br />
                    KUWAIT.
                </div>
                <div className='flex flex-col text-center w-full'>
                    <a href="mailto:info@bettermoveco.com" class="text-dark-200 hover:text-dark-300 transition duration-300 ease-in-out">info@bettermoveco.com</a>
                    <a href="tel:+96599341116" class="text-dark-200 hover:text-dark-300 transition duration-300 ease-in-out">(+965) 99 34 1116</a>
                    <a href="tel:+96560059169" class="text-dark-200 hover:text-dark-300 transition duration-300 ease-in-out">(+965) 60 05 9169</a>
                </div>
                <div>
                    {/* <i class="fa-brands fa-instagram"></i> */}
                </div>
            </div>
        </div>
    )
}