import React from 'react'
import ItemFeatured from './Item/ItemFeatured'
import harebellLogo from '../assets/img/logoWebHarebell.png';

const featured1 = {
  img: harebellLogo,
  title: 'pregnancy'
}

const PrincipalFeatures = () => {
  return (
    <section className="PrincipalFeatures pb-24 px-12">
        <ItemFeatured featured={featured1}/>
        <ItemFeatured featured={featured1}/>
        <ItemFeatured featured={featured1}/>
        <ItemFeatured featured={featured1}/>
    </section>
  )
}

export default PrincipalFeatures