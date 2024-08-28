import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Spec.css';

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
      <Typography variant="h6" className="sidebar-title">Specifications</Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="subtitle1">CPU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup onChange={handleCpuChange} name="cpu">
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel value="i5" control={<Radio />} label="i5" />
            <FormControlLabel value="i7" control={<Radio />} label="i7" />
            <FormControlLabel value="ryzen5" control={<Radio />} label="Ryzen 5" />
            <FormControlLabel value="ryzen7" control={<Radio />} label="Ryzen 7" />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography variant="subtitle1">GPU</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup onChange={handleGpuChange} name="gpu">
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel value="rtx3050" control={<Radio />} label="RTX 3050" />
            <FormControlLabel value="rtx4050" control={<Radio />} label="RTX 4050" />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography variant="subtitle1">RAM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup onChange={handleRamChange} name="ram">
            <FormControlLabel value="" control={<Radio />} label="All" />
            <FormControlLabel value="4gb" control={<Radio />} label="4GB" />
            <FormControlLabel value="8gb" control={<Radio />} label="8GB" />
            <FormControlLabel value="16gb" control={<Radio />} label="16GB" />
            <FormControlLabel value="24gb" control={<Radio />} label="24GB" />
            <FormControlLabel value="32gb" control={<Radio />} label="32GB" />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Spec;
