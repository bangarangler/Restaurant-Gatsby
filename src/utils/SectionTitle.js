import React from "react"
import styles from "./Section.module.less"

const SectionTitle = ({ title, message }) => {
  return (
    <div className={styles.TitleWrapper}>
      <h3 className={styles.message}>{message}</h3>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.underline} />
    </div>
  )
}

SectionTitle.defaultProps = {
  message: "Our message",
  title: "out title",
}

export default SectionTitle
