import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils/Header/Header.js"
import Banner from "../utils/Banner/Banner.js"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="about us" subtitle="a little about us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
