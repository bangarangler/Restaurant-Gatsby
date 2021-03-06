import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils/Header/Header.js"
import Banner from "../utils/Banner/Banner.js"
import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle={`let's get in touch`} />
    </PageHeader>
  </Layout>
)

export default ContactPage
