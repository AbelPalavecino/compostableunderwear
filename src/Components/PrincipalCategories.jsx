import React from 'react'
import Card from '../Components/Card/Card'
// import itemCategorie from '../assets/js/ItemsCategories'
import activeUnderwear from '../assets/img/active.jpg';

const PrincipalCategories = () => {
  
  const itemCategorie1 = {
    categoria: 'Active',
    urlImagen: activeUnderwear,
  }

  const itemCategorie2 = {
    categoria: 'Maternity',
    urlImagen: activeUnderwear,
  }

  const itemCategorie3 = {
    categoria: 'Sexy',
    urlImagen: activeUnderwear,
  }
  
  return (
    <section className="principal-categories px-4 py-24">
        <Card itemCategorie={itemCategorie1}/>
        <Card itemCategorie={itemCategorie2}/>
        <Card itemCategorie={itemCategorie3}/>
    </section>
  )
}

export default PrincipalCategories