import React from "react";

const PostCard = () => {
    return <>
        <div>
            <a
                class="block "
                href="/blog/the-chief-enemy-of-creativity-is-good-sense"
            >
                <div class="block relative pt-[75%] bg-black/5 dark:bg-white/5 ">
                    <img alt="Post thumbnail" />
                </div>
            </a>
            <div class="flex flex-wrap gap-3 items-center mt-6">
                <div class="flex flex-wrap gap-3">
                    <a
                        class="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                        href="/category/mind"
                    >
                        mind
                    </a>
                </div>
                <div class="text-sm data-color flex items-center ">
                    <span class="whitespace-nowrap ">Oct 28, 2022</span>
                    <span class="px-2.5">⋅</span>
                    <span class="whitespace-nowrap">3 min read</span>
                </div>
            </div>
            <h2 class="text-2xl font-bold mt-4 leading-snug">
                <a href="/blog/the-chief-enemy-of-creativity-is-good-sense">
                    The chief enemy of creativity is good sense
                </a>
            </h2>
            <p class="mt-4">
                Reprehenderit in culpa est eu aliqua eiusmod do amet nulla velit
                irure qui sunt officia ad occaecat ex qui.
            </p>
        </div>
    </>
}

export default PostCard;