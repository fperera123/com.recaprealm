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
import NavbarTwo from "@/sections/Navbar/NavbarTwo";
import HeroTwo from "@/sections/slices/Hero/HeroTwo";
import PostsOne from "@/sections/slices/Posts/PostsOne";
import PostDetailOne from "@/sections/slices/PostDetail/PostDetailOne";

export const query = graphql`
  query GetSingleUniversal($slug: String, $locale: String){
    mainMenu: strapiMainMenu (locale: {eq: $locale}){
      items {
        icon
        title
        target
        to
      }
    }
    universal: strapiUniversal(slug: {eq: $slug}) {
      id
      slug
      updatedAt

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
        ... on STRAPI__COMPONENT_SLICES_POST_DETAILS_ONE {
          __typename
          id

          postMeta {
            intro
            readingTime
            tag {
              strapi_json_value
            }
          }
          basicImage {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            imageAlt
            imageOrder
            imageTitle
          }
          titleMarkdown {
            title
            titleHtmlTag
            markdown {
              data {
                markdown
              }
            }
          }
        }
      }

    }
  }
`

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

      <meta name="robots" content="index, archive, follow" />

      <link rel="canonical" href={`${siteRoot}${location.pathname}`} />

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

export default function Home({
  data: {
    universal:
    {
      slices,
      direction,
      updatedAt,
      slug,
    },
    mainMenu: {
      items
    }
  }
}) {
  return (
    <PageWrapper>
      <NavbarTwo direction={direction} items={items} />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
        {
          slug == "#home-en" ? <HeroTwo /> : null
        }

        {slices ? slices.map(slice => {
          console.log(slice)
          switch (slice.__typename) {
            case "STRAPI__COMPONENT_SLICES_POST_DETAILS_ONE":
              return <PostDetailOne key={slice.id} data={slice} updatedAt={updatedAt} />

            default:
              return null;
          }
        }) : null}
        {/* <PostsOne/> */}
      </div>
      <Footer />
      <div className="sm:w-1/3 hidden"></div>
    </PageWrapper>
  )
}
