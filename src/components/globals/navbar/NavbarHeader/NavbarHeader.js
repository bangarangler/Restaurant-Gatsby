import React from "react"
import { Link } from "gatsby"
import logo from "../../../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import styles from "../../navbar/NavbarHeader/NavbarHeader.module.less"

class NavbarHeader extends React.Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <div className={styles.div}>
        <Link to="/">
          <img src={logo} alt="company name" />
        </Link>
        <FaAlignRight
          className={styles.toggleIcon}
          onClick={() => handleNavbar()}
        />
      </div>
    )
  }
}

export default NavbarHeader
