import React from "react"
import { PageWrapper } from "~components"
import HeaderButton from '~sections/slices/Header'
import { Link } from '~components'
import 'tw-elements';

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--sticky",
  containerFluid:true,
  // customLogo: Images.HeaderLogo,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnOneText="Login"
      btnTwoText="Get started"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function IndexPage() {
  return (
    <PageWrapper  headerConfig={header}>

    </PageWrapper>
  )
}
