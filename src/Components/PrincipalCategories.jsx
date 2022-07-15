import React, { Fragment } from 'react'
import Card from '../Components/Card/Card'
// import itemCategorie from '../assets/js/ItemsCategories'
import activePhoto from '../assets/img/active.jpg';
import maternityPhoto from '../assets/img/maternity.jpg';
import sexyPhoto from '../assets/img/sensual.jpg';
import bodysuitsPhoto from '../assets/img/bodysuits.jpg';

const PrincipalCategories = () => {
  
  const itemCategorie_a = {
    categoria: 'Maternity',
    urlImagen: maternityPhoto,
  }

  const itemCategorie_b = {
    categoria: 'Sensual',
    urlImagen: sexyPhoto,
  }

  const itemCategorie_c = {
    categoria: 'Active',
    urlImagen: activePhoto,
  }

  const itemCategorie_d = {
    categoria: 'Bodysuits',
    urlImagen: bodysuitsPhoto,
  }
  
  return (
    <Fragment>
      <h2 className="pt-24 txt-center">Designed to redefine the way we dress.</h2>
      <section className="principal-categories px-4 py-24">
          <Card itemCategorie={itemCategorie_a}/>
          <Card itemCategorie={itemCategorie_b}/>
          <Card itemCategorie={itemCategorie_c}/>
          <Card itemCategorie={itemCategorie_d}/>
      </section>
    </Fragment>
  )
}

export default PrincipalCategories