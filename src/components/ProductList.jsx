import React from 'react'

const ProductList = ({ products }) => {  
  return (
    <div className='products-wrapper'>
      {
        products.map((product) => (
          <div className='product'>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ProductList