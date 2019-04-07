import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../utils/Header/Header.js"
import Banner from "../utils/Banner/Banner.js"
import img from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA" />
    </HomeHeader>
  </Layout>
)

export default IndexPage
