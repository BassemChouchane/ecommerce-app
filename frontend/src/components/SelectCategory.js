import { InputLabel, MenuItem, Select, FormControl, OutlinedInput } from '@mui/material';
import React from 'react';

export default function SelectCategory() {
  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="category-select-label">Categories</InputLabel>
        <Select
          labelId="category-select-label"
          defaultValue=""
          input={<OutlinedInput label="Categories" />}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // Remove blue outline
              },
              '&:hover fieldset': {
                borderColor: 'transparent', // Remove blue outline on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Remove blue outline when focused
              },
            },
          }}
        >
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          <MenuItem value="category3">Category 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
