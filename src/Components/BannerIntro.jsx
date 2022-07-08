import React from 'react'

// const primaryButton = () => {
//   return <button className="primaryButton">SHOP NOW</button>
// }

const BannerIntro = () => {
  return (
    <section className='banner-intro'>
      <div className="col">
        <h1>Eco-Friendly Underwear</h1>
        <h4>Biodegradable organic cotton minimalist lingerie in styles and colors you can wear and love for years</h4>
        <button className="primaryButton">SHOP NOW</button>
      </div>
      <div className="col">
        <img src="https://via.placeholder.com/150C" alt="" />
      </div>
    </section>
  )
}

export default BannerIntro