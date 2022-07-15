import React from 'react'
import 'boxicons'

const Footer = () => {
  return (
    <footer className="py-12 px-20">
      <div className="container">
        <ul className="social-media pb-4">
          <li><a href="#"><box-icon  type="logo" name="facebook-square"/></a></li>
          <li><a href="#"><box-icon type='logo' name='instagram'/></a></li>
          <li><a href="#"><box-icon name='pinterest' type='logo' /></a></li>
          <li><a href="#"><box-icon name='youtube' type='logo' /></a></li>
        </ul>
        <nav>
          <ul className="navbar-footer">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer