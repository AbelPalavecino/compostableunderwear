import React from 'react'
import curvyUnderwear from '../assets/img/curvyUnderwear.jpg'
import ButtonPrimary from './Buttons/ButtonPrimary'

const shopNowBtn = {
  text: 'SHOP NOW'
}

const DesignFeatures = () => {
  return (
    <section className="py-24 px-4">
      <div className="container-content mx-auto desing-features">
        <div className="col px-12">
          <h2>Designed to enhance your body regardless of your body shape</h2>
          <p className="py-12">We make high quality underwear from OEKO- TEX 100 certified bamboo and organic cotton cotton in all sizes</p>
          <ButtonPrimary textBtn={shopNowBtn}/>
        </div>
        <div className="col px-12">
          <img src={curvyUnderwear} alt="CompostableUnderwearCurvy" />
        </div>
      </div>
    </section>
  )
}

export default DesignFeatures