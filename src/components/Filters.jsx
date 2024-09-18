import React from 'react'

const Filters = ({ categories, suppliers, onCategoryChange, onSupplierChange, onPriceChange }) => {

  return (
    <div className='filters'>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value='' key="first">All categories</option>
        {
          categories.map((category, index) => (
            <option value={category.id} key={index}>{category.name}</option>
          ))
        }
      </select>
      <select onChange={(e) => onSupplierChange(e.target.value)}>
        <option value="" key="first">All Suppliers</option>
        {
          suppliers.map((supplier, index) => (
            <option value={supplier.id} key={index}>{supplier.name}</option>
          ))
        }
      </select>
      <input type="number" placeholder='Max Price' onChange={(e) => onPriceChange(e.target.value)} />
    </div>
  )
}

export default Filters