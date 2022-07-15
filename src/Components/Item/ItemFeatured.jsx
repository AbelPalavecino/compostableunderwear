import React from 'react'

const ItemFeatured = ({featured}) => {
  return (
    <div class="card">
      <div className="content-icon pb-4">
        <img src={featured.img} alt="" />
      </div>
        <div class="container">
            <h4><b>{featured.title}</b></h4> 
            {/* <p>Architect & Engineer</p>  */}
        </div>
    </div>
  )
}

export default ItemFeatured