import React from 'react'
import { Fragment } from 'react'
import itemCategorie from '../../assets/js/ItemsCategories'

const NavBar = () => {
  return (
    <Fragment> 
      <nav>
        <li className='logoWebHarebell'><a tittle="Click to home" href="#"><img src={itemCategorie[0].image} alt="Logo Harebell Shop" /></a></li>
        <div className="navBarMenu">
          <a href="#"><button className="navButton">Shop Now</button></a>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar