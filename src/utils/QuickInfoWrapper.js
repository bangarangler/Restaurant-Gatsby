import React from "react"
import styles from "./QuickInfoWrapper.module.less"

const QuickInfoWrapper = ({ children }) => {
  return (
    <div className={styles.quickInfoDiv}>
      <p className={styles.text}>{children}</p>
    </div>
  )
}

export default QuickInfoWrapper
