import React from 'react'

const NewProducts = () => {
  return (
    <div className="new_prod">
      <div className="new_prod_text">
        <h2>
          NEW <span>PRODUCTS</span>
        </h2>
      </div>
      <div className="new_prod_grid_container">
        <div className="new_prod_grid">
          <div>
            TOP SELLER
          </div>
          <p>Face Masks</p>
        </div>
        <div className="new_prod_grid">
          <p>Body Spray</p>
        </div>
        <div className="new_prod_grid resp3">
          <p>Stay Free Ultra Pads</p>
        </div>
      </div>
    </div>
  );
}

export default NewProducts
