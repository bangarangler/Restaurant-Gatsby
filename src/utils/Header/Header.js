import React from "react"
import styles from "./Header.module.less"
import img from "../../images/bcg/homeBcg.jpeg"

const HomeHeader = ({ img, children }) => {
  return (
    <header
      className={styles.header}
      img={img}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})center/cover fixed no-repeat`,
      }}
    >
      {children}
    </header>
  )
}

const PageHeader = ({ img, children }) => {
  return (
    <header
      className={styles.DefaultHeader}
      img={img}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})center/cover fixed no-repeat`,
      }}
    >
      {children}
    </header>
  )
}

HomeHeader.defaultProps = {
  img: img,
}

PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader }
