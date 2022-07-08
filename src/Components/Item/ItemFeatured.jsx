import React from 'react'

const ItemFeatured = ({featured}) => {
  return (
    <div class="card">
        <img src={featured.img} alt="" />
        <div class="container">
            <h4><b>{featured.title}</b></h4> 
            {/* <p>Architect & Engineer</p>  */}
        </div>
    </div>
  )
}

export default ItemFeatured