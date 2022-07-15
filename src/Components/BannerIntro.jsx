import React from 'react'
import ReactPlayer from 'react-player'

// const primaryButton = () => {
//   return <button className="primaryButton">SHOP NOW</button>
// }

const BannerIntro = () => {
  return (
    <section className='banner-intro px-20'>
      <div className="col">
        <h1>Eco-Friendly Underwear</h1>
        <h4>Biodegradable organic cotton minimalist lingerie in styles and colors you can wear and love for years</h4>
        <button className="primaryButton">SEE MORE</button>
      </div>
      <div className="col">
        <div className="video px-20 py-24">
          <ReactPlayer
            url={require ('../assets/video/RopaInterior.mp4')}
            height='100%'
            width='100%'
            loop
            playing
          />
        </div>
      </div>
    </section>
  )
}

export default BannerIntro