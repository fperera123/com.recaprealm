import React from 'react'
import { Link } from '@/components'
import './style.scss';

export default function Navbar() {
    return (
        <>
            <nav className='flex flex-wrap w-full p-2 items-center md:!py-4 md:!px-6  md:inline-flex'>
                <div className='flex-grow'>
                    <img className='w-[250px]' src="https://bettermoveco.com/wp-content/uploads/2022/06/better-move-logo-1-e1654583285906.png" />
                </div>

                <div className='flex md:hidden'>
                    <button className='p-2 outline-0' data-bs-toggle="collapse" data-bs-target="#navBarItems">
                        <i class="fas fa-bars fa-2x !text-primary"></i>
                    </button>
                </div>

                <div class="collapse navbar-collapse items-center md:visible md:!flex md:flex-grow-0 md:flex-1 " id="navBarItems">
                    <ul class="navbar-nav flex flex-col md:flex-row pl-0 list-style-none mr-auto gap-y-2 md:gap-x-6">
                        <li class="nav-item active">
                            <Link className="" to="tel:+96599341116">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="" to="tel:+96599341116">
                                Gallery
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="" to="tel:+96599341116">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}