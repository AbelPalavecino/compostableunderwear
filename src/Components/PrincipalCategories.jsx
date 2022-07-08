import React from 'react'
import Card from '../Components/Card/Card'
// import itemCategorie from '../assets/js/ItemsCategories'
import harebellLogo from '../assets/img/logoWebHarebell.png';

const PrincipalCategories = () => {
  
  const itemCategorie1 = {
    categoria: 'active',
    urlImagen: harebellLogo,
  }

  const itemCategorie2 = {
    categoria: 'active',
    urlImagen: harebellLogo,
  }

  const itemCategorie3 = {
    categoria: 'active',
    urlImagen: harebellLogo,
  }
  
  return (
    <section className="principal-categories">
        <Card itemCategorie={itemCategorie1}/>
        <Card itemCategorie={itemCategorie2}/>
        <Card itemCategorie={itemCategorie3}/>
    </section>
  )
}

export default PrincipalCategories