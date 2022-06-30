import React from 'react'
import { Fragment } from 'react'

const NavBar = () => {
  return (
    <Fragment> 
      <nav>
        <li><a tittle="Click to home" href="#" className='logoWebHarebell'><img src="{`../assets/logoWebHarebell.png`}" alt="Logo Harebell Shop" /></a></li>
        <div className="navBarMenu">
          <a href="#"><button className="navButton">Shop Now</button></a>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar