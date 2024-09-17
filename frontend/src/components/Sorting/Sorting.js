import React from 'react';
import './Sorting.css';

const Sorting = ({ handleSortChange}) => {
  const handleChange = (event) => {
    handleSortChange(event.target.value);
  };

  return (
    <div className="sorting-container">
      <label htmlFor="sort" className="sorting-label">Sort by:</label>
      <select id="sort" className="sorting-select" onChange={handleChange} >
        <option value="default" disabled>	&uarr; 	&darr;</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
