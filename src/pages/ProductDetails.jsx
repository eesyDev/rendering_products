import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className='container'>
      <div className="product-detail-wrap">
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="info">
          <h2 className="title"></h2>
          <p className="descr"></p>
          <h4 className="price"></h4>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails