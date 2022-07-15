import React, { Fragment } from 'react'
import ItemFeatured from './Item/ItemFeatured'
import iconBamboo from '../assets/img/bxl-spring-boot.svg';
import iconAntiBacteria from '../assets/img/bxs-virus-block.svg';
import iconTermometro from '../assets/img/bxs-thermometer.svg';
import iconHipoalergenico from '../assets/img/bxs-leaf.svg';
import iconConfort from '../assets/img/bxs-donate-heart.svg';

const featured_a = {
  img: iconBamboo,
  title: 'Bamboo'
}

const featured_b = {
  img: iconAntiBacteria,
  title: 'Anti Bacteria'
}

const featured_c = {
  img: iconTermometro,
  title: 'Thermoregulable'
}

const featured_d = {
  img: iconHipoalergenico,
  title: 'Hypoallergenic'
}

const featured_e = {
  img: iconConfort,
  title: 'Supreme Confort'
}

const PrincipalFeatures = () => {
  return (
    <Fragment>
      {/* <h2 className="pb-24 txt-center">Underwear that absorbs your period</h2> */}
      <section className="PrincipalFeatures pb-24 px-12">
          <ItemFeatured featured={featured_a}/>
          <ItemFeatured featured={featured_b}/>
          <ItemFeatured featured={featured_c}/>
          <ItemFeatured featured={featured_d}/>
          <ItemFeatured featured={featured_e}/>
      </section>
    </Fragment>
  )
}

export default PrincipalFeatures