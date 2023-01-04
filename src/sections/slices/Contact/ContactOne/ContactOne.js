import React from 'react'
import Content from "../../contentStyles"
import { Link } from '@/components'

export default function ContactOne({ data }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-lightShade">
            <div class="w-full h-[400px]">
                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=FLOOR%202%20OFFICE%20No%206%20HAWALLY%20BLOCK%203%20STREET%20101,%20TUNISIA%20STREET%20FIRDOUS%20BUILDING,%20Kuwait%20City,%20Kuwait+(Better%20Move%20Co)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-4">
                <Content.Text as='p' className='text-center'>
                    FLOOR 2 OFFICE No 6<br />
                    HAWALLY BLOCK 3,<br />
                    STREET No 101<br />
                    TUNISIA STREET,<br />
                    FIRDOUS BUILDING,<br />
                    KUWAIT.
                </Content.Text>
                <div className='flex flex-col text-center w-full text-black mt-4 gap-y-4'>
                    <Link className="hover:text-primaryShade" to="tel:+96599341116">
                        <div className='flex items-center justify-center w-full'>
                            <i className='fal fa-phone fa-2x mr-2'></i>
                            <Content.Text as='p' className='whitespace-nowrap hover:text-primaryShade'>(+965) 99 34 1116 </Content.Text>
                        </div>
                    </Link>
                    <Link className="hover:text-primaryShade" to="tel:+96560059169">
                        <div className='flex items-center justify-center w-full'>
                            <i className='fal fa-phone fa-2x mr-2'></i>
                            <Content.Text as='p' className='whitespace-nowrap hover:text-primaryShade'>(+965) 60 05 9169 </Content.Text>
                        </div>
                    </Link>
                    <Link className="hover:text-primaryShade" to="mailto:info@bettermoveco.com">
                        <div className='flex items-center justify-center w-full'>
                            <i className='fal fa-envelope fa-2x mr-2'></i>
                            <Content.Text as='p' className='whitespace-nowrap hover:text-primaryShade'>info@bettermoveco.com</Content.Text>
                        </div>
                    </Link>
                </div>
                <div className='!text-primary gap-4 flex mt-4'>
                    <Link className="hover:text-black" to="https://wa.me/96599341116">
                        <i className='fab fa-whatsapp fa-2x'></i>
                    </Link>
                    <Link className="hover:text-black" to="https://wa.me/96599341116">
                        <i className='fab fa-facebook fa-2x'></i>
                    </Link>
                    <Link className="hover:text-black" to="https://wa.me/96599341116">
                        <i className='fab fa-instagram fa-2x'></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

