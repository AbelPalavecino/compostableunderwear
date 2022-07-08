import React from 'react'

const Card = ({ itemCategorie }) => {

  return (
    <div className='itemCategorie'>
        <img src={itemCategorie.urlImagen} alt="" />
        <h4>{itemCategorie.categoria}</h4>
    </div>
  )
}

export default Card