import React from "react"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"
import styles from "./NavbarIcons.module.less"
//const classNames = require("classnames/bind")
//import classNames from "classnames"

class NavbarIcons extends React.Component {
  state = {
    icons: [
      {
        id: 1,
        icon: (
          <FaFacebook
            className={[styles.icon, styles.facebookIcon].join(" ")}
          />
        ),
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: (
          <FaTwitter className={[styles.icon, styles.twitterIcon].join(" ")} />
        ),
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: (
          <FaInstagram
            className={[styles.icon, styles.instagramIcon].join(" ")}
          />
        ),
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    return (
      <div className={styles.iconWrapDiv}>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
    )
  }
}

export default NavbarIcons
