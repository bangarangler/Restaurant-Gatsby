import React from "react"
import styles from "./NavBarLinks.module.less"
import { Link } from "gatsby"

class NavbarLinks extends React.Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "Home",
      },
      {
        id: 1,
        path: "/about/",
        name: "About",
      },
      {
        id: 2,
        path: "/menu/",
        name: "Menu",
      },
      {
        id: 3,
        path: "/contact/",
        name: "Contact",
      },
    ],
  }
  render(propu) {
    return (
      <ul
        className={
          this.props.navbarOpen
            ? styles.showLinkWrapperUl
            : styles.LinkWrapperUl
        }
        open={this.props.navbarOpen}
      >
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className={styles.navLink}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavbarLinks
