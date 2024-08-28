import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, autocompleteClasses } from '@mui/material';
import CategoryDetail from './CategoryDetail';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(categories => setCategories(categories))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);



  return (
    <Grid container spacing={3} className='categoryBox'>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={4} key={category.id}>
          <Box className="categoryCard"  display="flex" flexDirection="column"  
          margin="5%" borderRadius={'20px'}
            >
            <img src={category.imageUrl} alt={category.name} style={{ width: '70%', height: '250px' , padding : '10px', marginLeft : "15%"} }/>
            <Box>
            <CategoryDetail name={category.name} 
            description={category.description}
            />
            </Box>
            
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
