import React from "react";

const PostDetailOne = () => {
    return (
        <>
            <div className="max-w-screen-md mx-auto ">
                <div class="flex flex-wrap gap-3 items-center text-[15px]">
                    <div class="flex flex-wrap gap-3">
                        <a
                            class="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap"
                            href="/category/idea"
                        >
                            idea
                        </a>
                    </div>
                    <div class="text-sm data-color flex items-center ">
                        <span class="whitespace-nowrap ">Sep 7, 2022</span>
                        <span class="px-2.5">⋅</span>
                        <span class="whitespace-nowrap">5 min read</span>
                    </div>
                </div>

                <h2 class="font-bold leading-snug text-3xl sm:text-[2.5rem] mt-6">Want to be more productive? focus on progress, not perfection</h2>

                <div class="block relative pt-[75%] bg-black/5 dark:bg-white/5 mt-12">
                    <img alt="Post Image" />
                </div>

                <div className="prose sm:prose-lg max-w-none dark:prose-invert prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:mt-2 mt-16 mb-32">
                    <p>Morbi accumsan turpis vitae vulputate rhoncus. Etiam accumsan arcu diam, ac lobortis ligula commodo quis. Nulla a ipsum sagittis, malesuada leo ac, convallis massa. Sed imperdiet lorem libero, sit amet iaculis dolor tempus at. Curabitur et tempor massa.</p>
                    <h1>Level 1 Heading</h1>
                    <p>Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue.</p>
                    <h2>Level 2 Heading</h2>
                    <p>Praesent accumsan leo at facilisis elementum. Nulla metus ligula, sagittis non commodo suscipit, porttitor eu risus.</p>
                    <h3>Level 3 Heading</h3>
                    <p>Est culpa officia fugiat aliquip do velit aute excepteur veniam laboris magna voluptate veniam qui est velit eu.</p>
                    <h4>Level 4 Heading</h4>
                    <p>Sint ad Lorem commodo deserunt nostrud ex fugiat aliqua sint exercitation est labore elit sint esse ad.</p>
                    <h2>Emphasis</h2>
                    <p><em>This text will be italic</em></p>
                    <p><strong>This text will be bold</strong></p>
                    <p><em>You <strong>can</strong> combine them</em></p>
                    <h2>Lists</h2>
                    <h3>Unordered</h3>
                    <ul>
                        <li>Pariatur Lorem exercitation in ut nulla nostrud ullamco tempor nulla sit tempor veniam adipisicing excepteur reprehenderit exercitation.</li>
                        <li>Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse qui anim excepteur id dolor enim et.</li>
                        <li>Sint culpa irure nostrud duis irure pariatur Lorem mollit mollit nulla duis id ut enim est sit nostrud magna mollit.</li>
                        <li>Laborum adipisicing excepteur quis id irure voluptate mollit velit ex ea minim deserunt eu cupidatat aute commodo proident commodo.</li>
                    </ul>
                    <h3>Ordered</h3>
                    <ol>
                        <li>Veniam adipisicing excepteur reprehenderit exercitation.</li>
                        <li>Laboris in duis in esse qui anim excepteur id dolor enim et.</li>
                        <li>Nulla duis id ut enim est sit nostrud magna mollit.</li>
                        <li>Velit ex ea minim deserunt eu cupidatat aute commodo proident commodo.</li>
                    </ol>
                    <h2>Sint culpa irure</h2>
                    <p>Pellentesque suscipit ultricies nibh sit amet auctor. Sed dapibus accumsan lobortis. Integer elementum enim sollicitudin justo pulvinar, vel tempor orci vulputate. Vivamus imperdiet lectus vitae neque egestas, a interdum magna efficitur. Morbi ligula est, dapibus vitae diam eu, placerat pretium ligula. Vestibulum tincidunt aliquam eros, et iaculis urna. Duis rhoncus magna libero. Etiam rhoncus et dolor eu tempus. Vivamus eget odio scelerisque, volutpat tortor vel, egestas mauris. Curabitur egestas dictum rutrum. Maecenas et neque sed est convallis feugiat. Nulla hendrerit diam at leo cursus, non viverra tellus bibendum. Duis rutrum, turpis et aliquam efficitur, ex arcu finibus tortor, nec pretium urna ante finibus ligula. Nunc ut viverra urna.</p>
                    <p>Sed metus purus, sollicitudin nec ante et, malesuada rhoncus sapien. Praesent id dui pulvinar, varius ligula a, feugiat nisl. Integer aliquam turpis augue, sit amet dapibus sem luctus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tincidunt urna. Nunc mollis metus id augue ullamcorper consequat. Sed imperdiet et nisi eu dictum. Vivamus laoreet nunc quam, eget bibendum enim lobortis vitae. Proin id tortor dui. Pellentesque mauris diam, tempus euismod eros in, elementum maximus risus. Phasellus consectetur turpis at nibh fermentum mollis.</p>
                    <h2>Praesent ullamcorper tellus</h2>
                    <ul>
                        <li>Pariatur Lorem exercitation in ut nulla nostrud ullamco tempor nulla sit tempor veniam adipisicing excepteur reprehenderit exercitation.</li>
                        <li>Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse qui anim excepteur id dolor enim et.</li>
                        <li>Sint culpa irure nostrud duis irure pariatur Lorem mollit mollit nulla duis id ut enim est sit nostrud magna mollit.</li>
                        <li>Laborum adipisicing excepteur quis id irure voluptate mollit velit ex ea minim deserunt eu cupidatat aute commodo proident commodo.</li>
                    </ul>
                    <p>Integer tortor lectus, lacinia non vulputate ut, dignissim a felis. Sed purus lectus, ultricies et urna sit amet, maximus cursus ipsum. Vivamus ut luctus urna, ut efficitur sapien. Vivamus erat nibh, iaculis et imperdiet in, luctus vitae felis. Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue. Praesent accumsan leo at facilisis elementum. Nulla metus ligula, sagittis non commodo suscipit, porttitor eu risus.</p>
                    <blockquote>
                        <p>Praesent ullamcorper tellus nec tincidunt volutpat. Vivamus tempor egestas justo eu lobortis. Etiam malesuada eleifend urna vel pretium. Etiam eu lorem vulputate, egestas ante pharetra, facilisis lectus. Integer tortor lectus, lacinia non vulputate ut, dignissim a felis.</p>
                    </blockquote>
                    <p>Morbi accumsan turpis vitae vulputate rhoncus. Etiam accumsan arcu diam, ac lobortis ligula commodo quis. Nulla a ipsum sagittis, malesuada leo ac, convallis massa. Sed imperdiet lorem libero, sit amet iaculis dolor tempus at. Curabitur et tempor massa.</p>
                    <p>Praesent ullamcorper tellus nec tincidunt volutpat. Vivamus tempor egestas justo eu lobortis. Etiam malesuada eleifend urna vel pretium. Etiam eu lorem vulputate, egestas ante pharetra, facilisis lectus. Integer tortor lectus, lacinia non vulputate ut, dignissim a felis. Sed purus lectus, ultricies et urna sit amet, maximus cursus ipsum. Vivamus ut luctus urna, ut efficitur sapien. Vivamus erat nibh, iaculis et imperdiet in, luctus vitae felis. Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue. Praesent accumsan leo at facilisis elementum. Nulla metus ligula, sagittis non commodo suscipit, porttitor eu risus.</p></div>

            </div>
        </>
    );
};

export default PostDetailOne;
