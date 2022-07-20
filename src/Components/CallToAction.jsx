import React from 'react'
import ButtonPrimary from './Buttons/ButtonPrimary'

const seeMoreBtn = {
  text: 'SEE MORE'
}

const CallToAction = () => {
  return (
    <section className="CallToAction pb-24 px-12">
      <h2 className='pb-12'>Not Just Underwear, Undercare</h2>
      <ButtonPrimary textBtn={seeMoreBtn}/>
    </section>
  )
}

export default CallToAction