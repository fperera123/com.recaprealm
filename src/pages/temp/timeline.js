import React, { useEffect } from 'react'
import { Link } from '@/components'
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import './styles.scss'
import Content from "@/sections/slices/contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function Timeline() {
    const title = 'Strategy'
    const titleHtmlTag = 'h3';
    return (
        <>
            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <span className="!text-primary uppercase mb-2">Work Process</span>
                    <Content.Title as={'h2'} className="text-center">
                        Digital System For Our Business
                    </Content.Title>

                    <ReactMarkdown className={'app-markdown text-center max-w-lg w-full mx-auto'} rehypePlugins={[rehypeRaw]} children={'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'} />
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="relative !ml-4 after:absolute after:inset-0 after:w-1 after:border-dashed after:content-[''] after:border-secondaryShade  after:border-l-[3px] after:-ml-3 md:after:m-auto md:after:-left-8">

                        <div className="grid md:grid-cols-2">
                            <div className="relative md:float-right md:!mr-16 md:before:-right-16 md:after:left-auto md:after:right-[-3.4rem] before:absolute before:z-10 before:h-8 before:w-8 before:rounded-full before:border-[3px] before:border-dashed before:border-secondaryShade before:bg-white before:ml-[-1.6rem] after:absolute after:z-10 after:w-3 after:h-3 after:rounded-full after:bg-primary after:top-[0.6rem] after:-left-4">
                                <img src="https://shreethemes.in/upwind/layouts/assets/images/svg/design-thinking.svg" class="h-64 w-64 md:ml-auto" alt="" />
                            </div>
                            <div className="md:pl-4">
                                <Content.Title as={titleHtmlTag} className="text-left">
                                    {title}
                                </Content.Title>
                                <ReactMarkdown className={'app-markdown max-w-md'} rehypePlugins={[rehypeRaw]} children={'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2">
                            <div className="md:mr-12 !order-1 md:!order-none">
                                <Content.Title as={titleHtmlTag} className="md:text-right">
                                    {title}
                                </Content.Title>
                                <ReactMarkdown className={'app-markdown max-w-md'} rehypePlugins={[rehypeRaw]} children={'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'} />
                            </div>
                            <div className="relative !order-0 md:!order-none flex-ord md:float-left md:!ml-16 md:before:-left-[4.4rem] md:after:left-[-5.4rem] before:absolute before:z-10 before:h-8 before:w-8 before:rounded-full before:border-[3px] before:border-dashed before:border-secondaryShade before:bg-white before:ml-[-1.6rem] after:absolute after:z-10 after:w-3 after:h-3 after:rounded-full after:bg-primary after:top-[0.6rem] after:-left-4">
                                <img src="https://shreethemes.in/upwind/layouts/assets/images/svg/design-thinking.svg" class="h-64 w-64 md:mr-auto" alt="" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2">
                            <div className="relative md:float-right md:!mr-16 md:before:-right-16 md:after:left-auto md:after:right-[-3.4rem] before:absolute before:z-10 before:h-8 before:w-8 before:rounded-full before:border-[3px] before:border-dashed before:border-secondaryShade before:bg-white before:ml-[-1.6rem] after:absolute after:z-10 after:w-3 after:h-3 after:rounded-full after:bg-primary after:top-[0.6rem] after:-left-4">
                                <img src="https://shreethemes.in/upwind/layouts/assets/images/svg/design-thinking.svg" class="h-64 w-64 md:ml-auto" alt="" />
                            </div>
                            <div className="md:pl-4">
                                <Content.Title as={titleHtmlTag} className="text-left">
                                    {title}
                                </Content.Title>
                                <ReactMarkdown className={'app-markdown max-w-md'} rehypePlugins={[rehypeRaw]} children={'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}