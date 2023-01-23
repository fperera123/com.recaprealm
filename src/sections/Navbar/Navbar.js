import React from 'react'
import { Link } from '@/components'
import './style.scss';
import { useLocation } from '@reach/router';
import { StaticImage as Img } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby';
import GlobalHeaderContext from "@/context/GlobalHeaderContext";

const languageSelector = (location) => {
    if (location.pathname.includes('/ar/') === true) {
        return (
            <Link
                to={location.pathname.replace("/ar/", "/")}
            >
                English
            </Link>
        )
    }
    else {
        return <Link to={`/ar${location.pathname}`}>
            عربي
        </Link>
    }
}

export default function Navbar({ direction, items }) {

    const { getLanguagePrefix } = React.useContext(GlobalHeaderContext);

    const location = useLocation()

    return (
        <>
            <nav dir="ltr" className='flex flex-wrap w-full p-2 items-center md:!py-4 md:!px-6  md:inline-flex'>
                <div className='flex-grow md:flex-grow-0 md:flex'>
                    <Img className='w-[60px]' src="../../assets/image/favicon-512.png" alt="better move co logo" title="Better Move Co" />
                </div>

                <div className='hidden !text-primary text-2xl text-bold justify-center gap-x-4 md:flex md:flex-grow '>
                    {getLanguagePrefix(location) == '/ar' ?
                        <div>شركة بيتر موف لنقل العفش والاغراض بالكويت</div> :
                        <div>Better Move Co. For Furniture Moving in Kuwait</div>
                    }
                </div>

                <div className='flex md:hidden'>
                    <button className='p-2 outline-0' data-bs-toggle="collapse" data-bs-target="#navBarItems">
                        <i className="fas fa-bars fa-2x !text-primary"></i>
                    </button>
                </div>

                <div dir={direction} className="collapse flex w-full items-center md:visible md:!flex md:flex-grow-0 md:flex-1 " id="navBarItems">
                    <ul className="navbar-nav flex flex-col w-full md:flex-row pl-0 list-style-none mr-auto gap-y-2 md:gap-x-6">
                        {items.map(item => {
                            return <li className="nav-item active">
                                <Link className="whitespace-nowrap" to={`${getLanguagePrefix(location)}${item.to}`}>
                                    {item.title}
                                </Link>
                            </li>
                        })}
                        <li className="nav-item">
                            {languageSelector(location)}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}