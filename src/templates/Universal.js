import React from "react";
import { graphql } from 'gatsby';
import { PageWrapper } from "~components/Core";
import _ from "lodash";
import { Link } from '~components'
import 'tw-elements';
import HeroOne from "@/sections/slices/Hero/HeroOne";
import ContentWithImage from "@/sections/slices/ContentWithImage";
import ContentWithImageAndList from "@/sections/slices/ContentWithImageAndList";
import ContentPlain from "@/sections/slices/ContentPlain";
import Reviews from "@/sections/slices/Reviews";
import Footer from "@/sections/Footer";
import ContactOne from "@/sections/slices/Contact/ContactOne";
import Navbar from "@/sections/Navbar";
import TopBar from "@/sections/TopBar";

export const query = graphql`
  query GetSingleUniversal($slug: String){
    universal: strapiUniversal(slug: {eq: $slug}) {
      id
      slug
      slices {
        ... on STRAPI__COMPONENT_SLICES_PARAGRAPH_WITH_TITLE  {
            __typename
            titleParagraph{
                title
                paragraph
                titleHtmlTag
            }
          }
        ... on STRAPI__COMPONENT_SLICES_HERO_ONE {
            __typename
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
            contentWithImageTitleParagraphImage: titleParagraphImage{
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
          ... on STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE_AND_LIST{
            __typename
            contentWithImageTitleParagraphImage: titleParagraphImage{
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
            unorderedList {
              text
              icon
            }
          }
          ... on STRAPI__COMPONENT_SLICES_REVIEW_ONE {
            __typename
           reviewOneItem{
            text
            customerName
            customerPosition
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


export default function Home({ data: { universal: { slices, slug } } }) {
  return (
    <PageWrapper>
      <TopBar/>
      {/* <Navbar/> */}
      {slices.map(slice => {
        console.log(slice)
        switch (slice.__typename) {
          case "STRAPI__COMPONENT_SLICES_PARAGRAPH_WITH_TITLE":
            return <ContentPlain key={slice.__typename} data={slice} />

          case "STRAPI__COMPONENT_SLICES_HERO_ONE":
            return <HeroOne key={slice.__typename} data={slice} />

          case "STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE":
            return <ContentWithImage key={slice.__typename} data={slice} />

          case "STRAPI__COMPONENT_SLICES_CONTENT_WITH_IMAGE_AND_LIST":
            return <ContentWithImageAndList key={slice.__typename} data={slice} />

          case "STRAPI__COMPONENT_SLICES_REVIEW_ONE":
            return <Reviews key={slice.__typename} data={slice} />

          case "STRAPI__COMPONENT_SLICES_REVIEW_ONE":
            return <ContactOne key={slice.__typename} data={slice} />

          default:
            return null;
        }
      })}
      <Footer />
    </PageWrapper>
  )
}
