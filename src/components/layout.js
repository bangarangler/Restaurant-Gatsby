import React from "react"

//import "./layout.css"
import "../less/index.less"
import Navbar from "./globals/navbar/Navbar.js"
import Footer from "./globals/footer/Footer.js"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
