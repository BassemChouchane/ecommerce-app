import React, { useState, useEffect } from "react";
import "./Category.css";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

const Category = ({ handleFilterChange }) => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");

  // List of series options
  const seriesOptions = {
    Asus: ["TUF Gaming A15", "TUF Gaming F15", "Vivobook 16X", 
      "ROG Strix G16", "ROG Zephyrus G16"],
    MSI: ["Thin", "Katana","Thin GF63","Cyborg 15"],
    Lenovo: ["IdeaPad Gaming","Legion", "LOQ"],
    Dell: ["G15 5530","Inspiron", "Alienware"],
    Gigabyte: ["G5 MF","Aero"],
    HP: ["Pavilion", "Omen","Victus 15-fa1003nk"],
  };

  useEffect(() => {
    // Reset the series filter when the company changes
    handleFilterChange("series", ""); // Reset series filter
    if (selectedCompany) {
      handleFilterChange("company", selectedCompany);
      // Automatically select the first series for the selected company
      const firstSeries = seriesOptions[selectedCompany]?.[0] || "";
      handleFilterChange("series", firstSeries);
      setSelectedSeries(firstSeries); // Update state to reflect the first series
    } else {
      handleFilterChange("company", "");
      handleFilterChange("series", ""); // Reset series filter if no company is selected
    }
  }, [selectedCompany, handleFilterChange]);

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setSelectedCompany(value);
  };

  const handleSeriesChange = (e) => {
    const value = e.target.value;
    setSelectedSeries(value);
    handleFilterChange("series", value);
  };

  return (
    <div>
      <h2 className="sidebar-title">Company</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleCompanyChange}
            type="radio"
            value=""
            name="company"
            checked={selectedCompany === ""}
          />
          <span className="checkmark"></span>All
        </label>
        <Input handleChange={handleCompanyChange} value="Asus" title="Asus" name="company" />
        <Input handleChange={handleCompanyChange} value="MSI" title="MSI" name="company" />
        <Input handleChange={handleCompanyChange} value="Lenovo" title="Lenovo" name="company" />
        <Input handleChange={handleCompanyChange} value="Dell" title="Dell" name="company" />
        <Input handleChange={handleCompanyChange} value="Gigabyte" title="Gigabyte" name="company" />
        <Input handleChange={handleCompanyChange} value="HP" title="HP" name="company" />
      </div>

      {selectedCompany && (
        <div>
          <h3 className="sidebar-title">Series</h3>
          <label className="sidebar-label-container">
            <input
              onChange={handleSeriesChange}
              type="radio"
              value=""
              name="series"
              checked={selectedSeries === ""}
            />
            <span className="checkmark"></span>All
          </label>
          {seriesOptions[selectedCompany].map((series) => (
            <Input key={series} handleChange={handleSeriesChange} value={series} title={series} name="series" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
