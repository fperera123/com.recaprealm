import React from 'react'
import { Link } from '@/components'

const copyRightYear = () => {
    return new Date().getFullYear() == 2018 ? '2018' : '2018 - ' + new Date().getFullYear();
}

export default function Footer() {
    return (
        <>
            <footer dir="ltr" className="text-center text-white bg-black">
                {/* <div className="container p-6">
                    <div className="">
                        <p className="flex justify-center items-center">
                            <span className="mr-4">Register for free</span>
                            <button type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                Sign up!
                            </button>
                        </p>
                    </div>
                </div> */}

                <div className='flex md:inline-flex flex-col md:flex-row'>
                    <div className="text-center md:text-left p-4">
                        © {copyRightYear()} Better Move Co. All Rights Reserved.
                    </div>
                    <div className="text-center md:text-right p-4">
                        A work of &nbsp;
                        <Link to="https://deviitor.com/">
                            Deviitor D&D
                        </Link>
                        &nbsp; 2023.
                    </div>
                </div>
            </footer>
        </>
    )
}