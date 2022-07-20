import React, { Fragment } from 'react'
import sustainableUnderwear from '../assets/img/sustainableUnderwear.jpg'
import ButtonPrimary from './Buttons/ButtonPrimary'

const shopNowBtn = {
  text: 'SHOP NOW'
}

const EcoFeatures = () => {
  return (
    <Fragment>
      <h2 className="pb-24 txt-center">Wear Now, Love Forever</h2>
      <section className="pb-24 px-4">
        <div className="container-content mx-auto desing-features">
          <div className="col px-12">
            <img src={sustainableUnderwear} alt="" />
          </div>
          <br></br><br></br>
          <div className="col px-12">
            <h2>Designed for your body, made to raise your standards</h2>
            <p className='py-12'>We make high quality clothing from organic and seamless cotton in all sizes.</p>
            {/* <button className="primaryButton">SHOP NOW</button> */}
            <ButtonPrimary textBtn={shopNowBtn}/>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default EcoFeatures