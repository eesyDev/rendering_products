import React from 'react'

const Filters = ({ categories, suppliers, onCategoryChange, onSupplierChange, onPriceChange }) => {

  return (
    <div className='filters'>
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        {
          categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))
        }
      </select>
      <select onChange={(e) => onSupplierChange(e.target.value)}>
        {
          suppliers.map((supplier) => (
            <option value={supplier.id}>{supplier.name}</option>
          ))
        }
      </select>
      <input type="number" placeholder='Max Price' onChange={(e) => onPriceChange(e.target.value)} />
    </div>
  )
}

export default Filters