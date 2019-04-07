import React from "react"
import styles from "./Banner.module.less"

function Banner({ title, subtitle, children }) {
  return (
    <div className={styles.BannerDiv}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      {children}
    </div>
  )
}

Banner.defaultProps = {
  title: "default title",
}

export default Banner
