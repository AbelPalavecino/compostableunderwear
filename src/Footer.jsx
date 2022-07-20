import React from 'react'
import 'boxicons'

const Footer = () => {
  return (
    <footer className="py-12 px-20">
      <div className="container-content mx-auto flex flex-col justify-center items-center">
        <ul className="social-media pb-4">
          <li><a href="https://www.facebook.com/harebellshop"><box-icon  type="logo" name="facebook-square"/></a></li>
          <li><a href="https://www.instagram.com/harebell.shop/"><box-icon type='logo' name='instagram'/></a></li>
          <li><a href="https://ar.pinterest.com/harebellshop/"><box-icon name='pinterest' type='logo' /></a></li>
          <li><a href="https://www.youtube.com/channel/UClT2E2Q-ikdyPOgdir1TVSg"><box-icon name='youtube' type='logo' /></a></li>
        </ul>
        {/* <nav>
          <ul className="navbar-footer">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav> */}
        <p className="Copyright">Copyright ©2022 Harebell Sustainable Shop All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer