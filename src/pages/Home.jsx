import React, { useState } from 'react';
import { products, categories, suppliers } from '../utils/data';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import SortProducts from '../components/SortProducts';

const Home = () => {
    const [selectedCategory, setSelectedCaterogy] = useState('');
    const [selectedSupplier, setSelectedSupplier] = useState('');
    const [price, setPrice] = useState(0)


    const filteredProducts = products.filter((product) => {
        const inCategory = selectedCategory ? product.categoryId === parseInt(selectedCategory) : true
        const inSuppliers = selectedSupplier ? product.supplierIds.includes(parseInt(selectedSupplier)) : true
        const inPrice = price ? product.price <= price : true

        return inCategory && inSuppliers && inPrice
    });

    const handleChangeCategory = (category) => setSelectedCaterogy(category);
    const handleChangeSupplier = (supplier) => setSelectedSupplier(supplier);
    const handleChangePrice = (price) => setPrice(price);

  return (
    <div className="products">
        <div className="products-filters">
          <Filters
            categories={categories}
            suppliers={suppliers}
            onCategoryChange={handleChangeCategory}
            onSupplierChange={handleChangeSupplier}
            onPriceChange={handleChangePrice}
          /> 
          <SortProducts/>
        </div>
        <div className="products-list">
          <ProductList 
            products={filteredProducts}
            suppliers={suppliers}
            categories={categories}
          />
        </div>
      </div>
  )
}

export default Home