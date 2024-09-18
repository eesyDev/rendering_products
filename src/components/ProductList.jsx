import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, suppliers, categories }) => {

	return (
		<div className='products-wrapper'>
			{
				products.map((product, index) => {
					const productSupplier = product.supplierIds.map((ids) => {
						const supplier = suppliers.find((s) => s.id === ids)
						return <a href="">#{supplier.name}</a>
					});
					const productCategory = categories.find((cat) => cat.id === product.categoryId)
					return (
						<div className='product' key={index}>
							<Link to={`/product/${product.id}`}>
								<img src={product.image}/>
							</Link>
							<h3>{product.name}</h3>
							<p>{product.price}</p>
							<p>{productCategory.name}</p>
							<div className="suppliers">
								{productSupplier}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default ProductList