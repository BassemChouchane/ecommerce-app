import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Spec.css';

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

const Spec = ({ handleFilterChange }) => {
  const handleCpuChange = (e) => {
    handleFilterChange("cpu", e.target.value);
  };

  const handleGpuChange = (e) => {
    handleFilterChange("gpu", e.target.value);
  };

  const handleRamChange = (e) => {
    handleFilterChange("ram", e.target.value);
  };

  return (
    <div>
      <Typography variant="h6" className="sidebar-title" >Specifications</Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="subtitle1">CPU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Input handleChange={handleCpuChange} value="" title="All" name="cpu" />
          <Input handleChange={handleCpuChange} value="i5" title="i5" name="cpu" />
          <Input handleChange={handleCpuChange} value="i7" title="i7" name="cpu" />
          <Input handleChange={handleCpuChange} value="Ryzen 5" title="Ryzen 5" name="cpu" />
          <Input handleChange={handleCpuChange} value="Ryzen 7" title="Ryzen 7" name="cpu" />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography variant="subtitle1">GPU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Input handleChange={handleGpuChange} value="" title="All" name="gpu" />
          <Input handleChange={handleGpuChange} value="RTX 2050" title="RTX 2050" name="gpu" />
          <Input handleChange={handleGpuChange} value="RTX 3050" title="RTX 3050" name="gpu" />
          <Input handleChange={handleGpuChange} value="RTX 3060" title="RTX 3060" name="gpu" />
          <Input handleChange={handleGpuChange} value="RTX 3070TI" title="RTX 3070TI" name="gpu" />
          <Input handleChange={handleGpuChange} value="RTX 4050" title="RTX 4050" name="gpu" />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography variant="subtitle1">RAM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Input handleChange={handleRamChange} value="" title="All" name="ram" />
          <Input handleChange={handleRamChange} value="8gb" title="8GB" name="ram" />
          <Input handleChange={handleRamChange} value="16gb" title="16GB" name="ram" />
          <Input handleChange={handleRamChange} value="24gb" title="24GB" name="ram" />
          <Input handleChange={handleRamChange} value="32gb" title="32GB" name="ram" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Spec;
