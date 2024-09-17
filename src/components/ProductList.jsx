import React from 'react'

const ProductList = ({ products, suppliers, categories }) => {

	return (
		<div className='products-wrapper'>
			{
				products.map((product) => {
					const productSupplier = product.supplierIds.map((ids) => {
						const supplier = suppliers.find((s) => s.id === ids)
						return `#${supplier.name}`
					});
					const productCategory = categories.find((cat) => cat.id === product.categoryId)
					return (
						<div className='product'>
							<h3>{product.name}</h3>
							<p>{product.price}</p>
							<p>{productCategory.name}</p>
							<div className="suppliers">
								<a href="#">{productSupplier}</a>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default ProductList