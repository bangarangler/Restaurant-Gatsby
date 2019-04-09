import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./Gallery.module.less"
import Img from "gatsby-image"
import { Section } from "../../utils/Section.js"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges
        return (
          <Section>
            <div className={styles.GalleryWrapper}>
              {images.map(({ node }, index) => {
                const itemNum = `item${index + 1}`
                return (
                  <div
                    key={index}
                    className={`${styles.item} ${styles[itemNum]}`}
                  >
                    <Img
                      fluid={node.childImageSharp.fluid}
                      style={{ height: "100%" }}
                    />
                    <p className={styles.info}>awesome pizza </p>
                  </div>
                )
              })}
            </div>
          </Section>
        )
      }}
    />
  )
}
