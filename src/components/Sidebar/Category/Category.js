import React, { useState, useEffect } from "react";
import "./Category.css";

const Input = ({ handleChange, value, title, name, color, checked }) => {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        checked={checked}
      />
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
    MSI: ["Thin", "Katana", "Thin GF63", "Cyborg 15"],
    Lenovo: ["IdeaPad Gaming", "Legion", "LOQ"],
    Dell: ["G15 5530", "Inspiron", "Alienware"],
    Gigabyte: ["G5 MF", "Aero"],
    HP: ["Pavilion", "Omen", "Victus 15-fa1003nk"],
  };

  useEffect(() => {
    if (selectedCompany) {
      handleFilterChange("company", selectedCompany);
      if (!selectedSeries) {
        const firstSeries = seriesOptions[selectedCompany]?.[0] || "";
        setSelectedSeries(firstSeries);
        handleFilterChange("series", firstSeries);
      } else {
        handleFilterChange("series", selectedSeries);
      }
    } else {
      handleFilterChange("company", "");
      handleFilterChange("series", "");
    }
  }, [selectedCompany, selectedSeries, handleFilterChange]);

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setSelectedCompany(value);
    setSelectedSeries(""); // Reset series when the company changes
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
        <Input
          handleChange={handleCompanyChange}
          value="Asus"
          title="Asus"
          name="company"
          checked={selectedCompany === "Asus"}
        />
        <Input
          handleChange={handleCompanyChange}
          value="MSI"
          title="MSI"
          name="company"
          checked={selectedCompany === "MSI"}
        />
        <Input
          handleChange={handleCompanyChange}
          value="Lenovo"
          title="Lenovo"
          name="company"
          checked={selectedCompany === "Lenovo"}
        />
        <Input
          handleChange={handleCompanyChange}
          value="Dell"
          title="Dell"
          name="company"
          checked={selectedCompany === "Dell"}
        />
        <Input
          handleChange={handleCompanyChange}
          value="Gigabyte"
          title="Gigabyte"
          name="company"
          checked={selectedCompany === "Gigabyte"}
        />
        <Input
          handleChange={handleCompanyChange}
          value="HP"
          title="HP"
          name="company"
          checked={selectedCompany === "HP"}
        />
      </div>

      {selectedCompany && (
        <div>
          <h3 className="sidebar-title">Series</h3>
          {seriesOptions[selectedCompany]?.map((series) => (
            <Input
              key={series}
              handleChange={handleSeriesChange}
              value={series}
              title={series}
              name="series"
              checked={selectedSeries === series}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
