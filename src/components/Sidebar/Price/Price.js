import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import "./Price.css";

const Price = ({ handleFilterChange }) => {
  const [value, setValue] = useState([0, 12000]); // Default range

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const priceRange = {
      min: newValue[0],
      max: newValue[1],
    };
    handleFilterChange('price', priceRange);
  };

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={15000} 
        step={50}  
      />
      <div className="price-range-labels">
        <span>{`Min : ${value[0]} DT`} &nbsp;</span>
        <span>{`Max : ${value[1]} DT`}</span>
      </div>
    </div>
  );
};

export default Price;
