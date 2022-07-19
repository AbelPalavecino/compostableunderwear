import React, { Fragment } from 'react'
import Card from '../Components/Card/Card'
// import itemCategorie from '../assets/js/ItemsCategories'
import activePhoto from '../assets/img/active.jpg';
import maternityPhoto from '../assets/img/maternity.jpg';
import sexyPhoto from '../assets/img/sensual.jpg';
import bodysuitsPhoto from '../assets/img/bodysuits.jpg';

const PrincipalCategories = () => {

  const itemCategorie_a = {
    categoria: 'Bodysuits',
    urlImagen: bodysuitsPhoto,
  }

  const itemCategorie_b = {
    categoria: 'Active',
    urlImagen: activePhoto,
  }

  const itemCategorie_c = {
    categoria: 'Sensual',
    urlImagen: sexyPhoto,
  }
  
  const itemCategorie_d = {
    categoria: 'Maternity',
    urlImagen: maternityPhoto,
  }
  
  return (
    <Fragment>
      <h2 className="pt-24 txt-center">Designed to redefine the way you care</h2>
      <section className="px-4 py-24">
        <div className="container-content mx-auto principal-categories">
          <Card itemCategorie={itemCategorie_a}/>
          <Card itemCategorie={itemCategorie_b}/>
          <Card itemCategorie={itemCategorie_c}/>
          <Card itemCategorie={itemCategorie_d}/>
        </div>
      </section>
    </Fragment>
  )
}

export default PrincipalCategories