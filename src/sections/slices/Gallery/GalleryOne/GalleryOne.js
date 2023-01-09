import React from 'react'
import _ from 'lodash';
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'

const getGridImages = (grid, gridNo) => {
    const isOdd = gridNo % 2 == 0 ? false : true;
    {
        return grid.map(({ image, imageAlt }, index) => {
            return <div key={`${grid}-${index}`} className={"p-1 " + (!isOdd && index == 2 || isOdd && index == 0 ? 'w-full' : 'w-1/2')} >
                <Img className="block object-cover object-center w-full h-full rounded-lg" image={getImage(image.localFile)} alt={imageAlt} layout="fullWidth" placeholder="blurred" />
            </div>;
        })
    }
}

export default function GalleryOne({ data: { imageGrid } }) {
    const grids = _.chunk(imageGrid, 3);
    return (
        <>
            <section className="overflow-hidden bg-lightShade py-16">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        {
                            grids.map((grid, index) => {
                                return <div key={index} className="flex flex-wrap w-full sm:w-1/2"> {getGridImages(grid, index)}</div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}