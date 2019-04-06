import React from "react"

//import "./layout.css"
import "../less/index.less"
import Navbar from "./globals/navbar/Navbar.js"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

export default Layout
