import React from "react"
import styles from "./Footer.module.less"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

export default class Footer extends React.Component {
  state = {
    icons: [
      {
        id: 1,
        icon: (
          <FaFacebook
            className={[styles.icon, styles.facebookIcon].join(" ")}
          />
        ),
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: (
          <FaTwitter className={[styles.icon, styles.twitterIcon].join(" ")} />
        ),
        path: `https://www.twitter.com`,
      },
      {
        id: 3,
        icon: (
          <FaInstagram
            className={[styles.icon, styles.instagramIcon].join(" ")}
          />
        ),
        path: `https://www.instagram.com`,
      },
    ],
  }
  render() {
    return (
      <div className={styles.footerWrapper}>
        <div className={styles.title}>eatery</div>
        <div className={styles.icons}>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className={styles.copyright}>copyright &copy; 2019 eatery</p>
      </div>
    )
  }
}
