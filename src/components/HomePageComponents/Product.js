import React from "react"
import styles from "./Product.module.less"
import Img from "gatsby-image"

export default function Product({ product }) {
  const { name, price, ingredients } = product
  const { fixed } = product.img
  return (
    <div className={styles.ProductWrapper}>
      <Img fixed={fixed} className={styles.img} />
      <div className={styles.text}>
        <div className={styles.productContent}>
          <h3 className={styles.name}>{name}</h3>
          <h3 className={styles.price}>{price}</h3>
        </div>
        <p className={styles.info}>{ingredients}</p>
      </div>
    </div>
  )
}
