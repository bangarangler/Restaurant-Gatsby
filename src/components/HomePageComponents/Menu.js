import React from "react"
import Product from "./Product.js"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Section } from "../../utils/Section.js"
import SectionTitle from "../../utils/SectionTitle.js"
import { SectionButton } from "../../utils/Button.js"
import styles from "./Menu.module.less"

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Menu() {
  return (
    <Section>
      <SectionTitle title="featured items" message="little taste" />
      <div className={styles.ProductList}>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges
            return products.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </div>
    </Section>
  )
}
