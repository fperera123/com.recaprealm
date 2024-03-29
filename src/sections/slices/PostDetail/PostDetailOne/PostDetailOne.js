import React from "react";
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image";
import Content from "./../../contentStyles"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const PostDetailOne = ({
    data: { postMeta, basicImage, titleMarkdown },
    updatedAt,
}) => {
    const { imageAlt, imageOrder, imageTitle, image } = basicImage;
    const {
        tag: { strapi_json_value: tags },
        into,
        readingTime,
    } = postMeta;
    const {
        title,
        titleHtmlTag,
        markdown: {
            data: { markdown },
        },
    } = titleMarkdown;
    console.log(tags);
    return (
        <>
            <div className="max-w-screen-md mx-auto ">
                <div className="flex flex-wrap gap-3 items-center text-[15px]">
                    <div className="flex flex-wrap gap-3">
                        {tags ? tags.map((tag) => {
                            return <a
                                className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                                haref="/category/idea"
                            >
                                {tag}
                            </a>
                        }) : null}
                    </div>
                    <div className="text-sm data-color flex items-center ">
                        <span className="whitespace-nowrap ">
                            {new Date(updatedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </span>
                        <span className="px-2.5">⋅</span>
                        <span className="whitespace-nowrap">{readingTime} min read</span>
                    </div>
                </div>

                <Content.Title as={titleHtmlTag} className="font-bold leading-snug text-3xl sm:text-[2.5rem] mt-6">
                    {title}
                </Content.Title>

                <div className="block relative bg-black/5 dark:bg-white/5 mt-12">
                    <Img
                        image={getImage(image.localFile)}
                        alt={imageAlt}
                        title={imageTitle}
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                </div>

                <div className="prose sm:prose-lg max-w-none dark:prose-invert prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:mt-2 mt-16 mb-32">
                    <ReactMarkdown className={'app-markdown'} rehypePlugins={[rehypeRaw]} children={markdown} />
                </div>
            </div>
        </>
    );
};

export default PostDetailOne;
