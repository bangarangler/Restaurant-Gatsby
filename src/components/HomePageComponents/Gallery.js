import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./Gallery.module.less"
import Img from "gatsby-image"
import { Section } from "../../utils/Section.js"

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <Section>
            <div className={styles.GalleryWrapper}>
              <div className={[styles.item, styles.item1].join(" ")}>
                <Img fluid={img1} style={{ height: "100%" }} />
                <p className={styles.info}>awesome pizza</p>
              </div>
              <div className={[styles.item, styles.item2].join(" ")}>
                <Img fluid={img2} />
                <p className={styles.info}>awesome pork</p>
              </div>
              <div className={[styles.item, styles.item3].join(" ")}>
                <Img fluid={img3} />
                <p className={styles.info}>awesome steak</p>
              </div>
            </div>
          </Section>
        )
      }}
    />
  )
}
