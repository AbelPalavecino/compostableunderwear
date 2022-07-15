import React from 'react'

const Card = ({ itemCategorie }) => {

  return (
    <div className='itemCategorie'>
        <div className="containerPhoto pb-4">
          <img src={itemCategorie.urlImagen} alt="" />
        </div>
        <h4>{itemCategorie.categoria}</h4>
    </div>
  )
}

export default Card