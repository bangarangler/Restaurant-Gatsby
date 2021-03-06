import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../utils/Header/Header.js"
import Banner from "../utils/Banner/Banner.js"
import { BannerButton } from "../utils/Button.js"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePageComponents/QuickInfo.js"
//import Gallery from '../components/HomePageComponents/Gallery.js';
import GalleryImproved from "../components/HomePageComponents/GalleryImproved.js"
import Menu from "../components/HomePageComponents/Menu.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA">
        <BannerButton>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <GalleryImproved />
    <Menu />
  </Layout>
)

export default IndexPage
