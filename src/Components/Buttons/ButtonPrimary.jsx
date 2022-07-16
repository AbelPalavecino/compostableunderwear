import React, { Fragment } from 'react'
import 'boxicons'

const ButtonPrimary = ({ textBtn }) => {
  return (
    <Fragment>
        <button className="primaryButton">{textBtn.text} 
          <span>
            <box-icon
              name='chevron-right' 
              animation='fade-right'
              color='white'
            />
          </span>
        </button>
    </Fragment>
  )
}

export default ButtonPrimary