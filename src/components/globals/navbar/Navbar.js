import React from "react"
import NavbarHeader from "./NavbarHeader/NavbarHeader.js"
import NavbarLinks from "./NavbarLinks/NavbarLinks.js"
import NavbarIcons from "./NavbarIcons/NavbarIcons.js"
import styles from "./Navbar.module.less"

export default class Navbar extends React.Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  render() {
    return (
      <nav className={styles.nav}>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </nav>
    )
  }
}
