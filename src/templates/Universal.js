import React from "react";
import { graphql } from 'gatsby';
import { PageWrapper } from "~components/Core";
import _ from "lodash";
// import 'tw-elements';
import HeroOne from "@/sections/slices/Hero/HeroOne";
import ContentWithImage from "@/sections/slices/ContentWithImage";
import ContentWithImageAndList from "@/sections/slices/ContentWithImageAndList";
import ContentPlain from "@/sections/slices/ContentPlain";
import Reviews from "@/sections/slices/Reviews";
import Footer from "@/sections/Footer";
import ContactOne from "@/sections/slices/Contact/ContactOne";
import Navbar from "@/sections/Navbar";
import TopBar from "@/sections/TopBar";
import GalleryOne from "@/sections/slices/Gallery/GalleryOne";
import { GatsbyImage as Img, getSrc, getImage } from 'gatsby-plugin-image'
import { Helmet } from "react-helmet";

export const query = graphql`
  query GetSingleUniversal($slug: String){
    universal: strapiUniversal(slug: {eq: $slug}) {
      id
      slug

      metaTitle,
      metaDescription,
      ogTitle,
      ogDescription,
      ogImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      jsonLD{
        internal{
          content
        }
      }

      lang
      direction

      slices {
        ... on STRAPI__COMPONENT_SLICES_PARAGRAPH_WITH_TITLE  {
            __typename
            id
            titleMarkdown{
                title
                markdown{
                  data{
                    markdown
                  }
                }
                titleHtmlTag
            }
          }
        ... on STRAPI__COMPONENT_SLICES_HERO_ONE {
            __typename
            id
            titleParagraphImage{
                title
                paragraph
                titleHtmlTag
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                imageAlt
            }
          }
          ... on STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE {
            __typename
            id
            contentWithImageBasicImage : basicImage {
              imageAlt
              imageOrder
              imageTitle
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            contentWithImageTitleMarkdown : titleMarkdown {
              title
              titleHtmlTag
              markdown {
                data {
                  markdown
                }
              }
            }
          }
          ... on STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE_AND_LIST{
            __typename
            id
            contentWithImageTitleMarkdownImage: titleMarkdownImage{
                title
                markdown{
                  data{
                    markdown
                  }
                }
                titleHtmlTag
                image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                imageAlt
            }
            unorderedList {
              text
              icon
            }
            sliceWidth,
          }
          ... on STRAPI__COMPONENT_SLICES_REVIEW_ONE {
            __typename
            id
           reviewOneItem{
            text
            customerName
            customerPosition
            imageAlt
           }
          }
          ... on STRAPI__COMPONENT_SLICES_GALLERY_ONE {
            __typename
            id
            imageGrid{
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            imageAlt
           }
          }
      }
    }
  }
`

// const getHeader = (slug) => {
//     const headerClasses = slug == "#home" ? "site-header site-header--menu-end dark-header site-header--sticky" : "site-header site-header--menu-end dark-header not-transparent site-header--sticky";
//     const header = {
//         headerClasses: headerClasses,
//         containerFluid: false,
//         darkLogo: false,
//         buttonBlock: (
//             <HeaderButton
//                 className="ms-auto d-none d-xs-inline-flex"
//                 btnText="Contact"
//                 mr="15px"
//                 mrLG="0"
//                 btnLink="/contact"
//             />
//         ),
//     }

//     return header;
// }


export function Head({ location, data: { universal } }) {
  const siteRoot = process.env.SITE_URL;

  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    ogImage,
    jsonLD,

    lang,
    direction,
  } = universal;

  const src = getSrc(ogImage.localFile);

  const { internal: { content } } = jsonLD;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={`${siteRoot}${location.pathname}`} />
      <meta property="og:image" content={`${siteRoot}${src}`} />

      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="robots" content="index, archive, follow"/>

      <link rel="canonical" href={`${siteRoot}${location.pathname}`}/>

      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>

      <script type="application/ld+json">
        {
          content
        }
      </script>

      <Helmet
        htmlAttributes={{
          lang: lang,
          dir: direction,
        }}
      />

    </>
  )
}

export default function Home({ data: { universal: { slices, direction } } }) {
  return (
    <PageWrapper>
      <TopBar />
      <Navbar data={direction} />
      {slices.map(slice => {
        switch (slice.__typename) {
          case "STRAPI__COMPONENT_SLICES_PARAGRAPH_WITH_TITLE":
            return <ContentPlain key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_HERO_ONE":
            return <HeroOne key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE":
            return <ContentWithImage key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE_AND_LIST":
            return <ContentWithImageAndList key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_REVIEW_ONE":
            return <Reviews key={slice.id} data={slice} />

          case "STRAPI__COMPONENT_SLICES_GALLERY_ONE":
            return <GalleryOne key={slice.id} data={slice} />

          default:
            return null;
        }
      })}
      <ContactOne />
      <Footer />
      <div className="sm:w-1/3 hidden"></div>
    </PageWrapper>
  )
}
