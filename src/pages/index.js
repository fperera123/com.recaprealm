import React from "react"
import { PageWrapper } from "~components"
const header = {
  headerClasses: "site-header site-header--menu-end light-header site-header--sticky",
  containerFluid:false,
}

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
    </PageWrapper>
  )
}
