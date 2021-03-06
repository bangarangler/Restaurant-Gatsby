import React from "react"
import styles from "./Button.module.less"

const BannerButton = props => {
  return <button className={styles.bannerButton}>{props.children}</button>
}

const SectionButton = props => {
  return <button className={styles.SectionButton}>{props.children}</button>
}

export { BannerButton, SectionButton }
