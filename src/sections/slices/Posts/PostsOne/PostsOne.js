import React from "react";
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image";
import Content from "../../contentStyles";
import PostCard from "./PostCard";

const PostsOne = () => {
    return (
        <>
            <div className="mt-32"></div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
            <div className="mb-32"></div>
        </>
    );
};

export default PostsOne;
