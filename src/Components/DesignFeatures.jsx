import React from 'react'
import curvyUnderwear from '../assets/img/curvyUnderwear.jpg'
import ButtonPrimary from './Buttons/ButtonPrimary'

const shopNowBtn = {
  text: 'SHOP NOW'
}

const DesignFeatures = () => {
  return (
    <section className="desing-features py-24 px-4">
      <div className="col px-12">
        <h2>Designed for your body, made to raise your standards</h2>
        <p className="py-12">We make high quality clothing from organic and seamless cotton in all sizes.</p>
        <ButtonPrimary textBtn={shopNowBtn}/>
      </div>
      <div className="col px-12">
        <img src={curvyUnderwear} alt="CompostableUnderwearCurvy" />
      </div>
    </section>
  )
}

export default DesignFeatures