import React from 'react'
import ReactPlayer from 'react-player'
import ButtonPrimary from './Buttons/ButtonPrimary'

const seeMoreBtn = {
  text: 'SEE MORE'
}

const BannerIntro = () => {
  return (
    <section className='px-20 bg-merino'>
      <div className="container-content banner-intro mx-auto">
        <div className="col">
          <h1>Eco-Friendly Underwear</h1>
          <h4 className="py-12">Compostable bamboo and organic cotton minimalist lingerie you will wear and love for years</h4>
          <ButtonPrimary textBtn={seeMoreBtn}/>
          {/* <button className="primaryButton">SEE MORE</button> */}
        </div>
        <div className="col">
          <div className="video px-20 py-24">
            <ReactPlayer
              url={require ('../assets/video/RopaInterior.mp4')}
              height='100%'
              width='100%'
              playing
              loop
            />
          </div>
        </div>
      </div>{/* End Container content */}
    </section>
  )
}

export default BannerIntro