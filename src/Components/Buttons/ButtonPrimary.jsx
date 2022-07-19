import React, { Fragment } from 'react'
import 'boxicons'

const ButtonPrimary = ({ textBtn }) => {
  return (
    <Fragment>
      <a href="https://harebellshop.com/product-category/clothing/intimates/">
        <button className="primaryButton">{textBtn.text} 
          <span>
            <box-icon
              name='chevron-right' 
              animation='fade-right'
              color='white'
            />
          </span>
        </button>
      </a>
    </Fragment>
  )
}

export default ButtonPrimary