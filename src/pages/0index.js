import React from "react"
import { PageWrapper } from "~components"
import HeaderButton from '~sections/slices/Header'
import { Link } from '~components'
import 'tw-elements';
import HeroSection from "@/sections/slices/Hero/HeroOne";
import ContentWithImage from "@/sections/slices/ContentWithImage";
import ContentWithImageAndList from "@/sections/slices/ContentWithImageAndList";
import ContentPlain from "@/sections/slices/ContentPlain";
import Reviews from "@/sections/slices/Reviews";
import Footer from "@/sections/Footer";

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid: true,
  // // customLogo: Images.HeaderLogo,
  // buttonBlock: (
  //   <HeaderButton
  //     className="ms-auto d-none d-xs-inline-flex"
  //     btnOneText="Login"
  //     btnTwoText="Get started"
  //     mr="15px"
  //     mrLG="0"
  //   />
  // ),
}

export default function IndexPage() {
  return (
    <PageWrapper>
      {/* <HeroSection />
      <ContentWithImage />
      <ContentWithImageAndList />
      <ContentPlain/>
      <Reviews/>
      <Footer/> */}
    </PageWrapper>
  )
}
