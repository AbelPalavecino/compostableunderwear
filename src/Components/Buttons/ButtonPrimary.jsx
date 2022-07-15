import React, { Fragment } from 'react'

const ButtonPrimary = ({ textBtn }) => {
  return (
    <Fragment>
        <button className="primaryButton">{textBtn.text}</button>
    </Fragment>
  )
}

export default ButtonPrimary