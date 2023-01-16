import React from 'react'
import { Link } from '@/components'
import { useLocation } from '@reach/router';


export default function TopBar() {
    const location = useLocation();
    return (
        <>
            <div dir="ltr" className='flex !bg-primary py-1 px-2 md:!px-6'>
                <div className='flex text-lightShade gap-2 flex-wrap w-full justify-center items-center md:justify-start'>
                    <Link rel="nofollow" className="hover:text-black" to="https://wa.me/96599341116">
                        <i className='fab fa-whatsapp fa-2x'></i>
                    </Link>
                    <Link rel="nofollow" className="hover:text-black" to="https://facebook.com/bettermovecokw">
                        <i className='fab fa-facebook fa-2x'></i>
                    </Link>
                    <Link rel="nofollow" className="hover:text-black" to="https://www.instagram.com/better_move_co/">
                        <i className='fab fa-instagram fa-2x'></i>
                    </Link>
                </div>

                <div className='flex text-lightShade gap-2 flex-wrap w-full justify-center items-center md:justify-end'>
                    <Link className="hover:text-black" to={`/ga/call_to_action?action=tel:+96599341116&redirect=${location.href}`}>
                        <div className='flex items-center'>
                            <i className='fal fa-phone fa-2x mr-2'></i>
                            <span className='whitespace-nowrap'>(+965) 99 34 1116 </span>
                        </div>
                    </Link>
                    <Link className="hover:text-black" to="mailto:info@bettermoveco.com">
                        <div className='flex items-center'>
                            <i className='fal fa-envelope fa-2x mr-2'></i>
                            <span className='whitespace-nowrap'>info@bettermoveco.com</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}