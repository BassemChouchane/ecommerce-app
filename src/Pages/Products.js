import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Box, Grid, Pagination } from '@mui/material';
import usePagination from '../components/Pagination';
import Sidebar from '../components/Sidebar/Sidebar';
import { filterProducts } from '../utils/filterFunctions';


export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ color: '', company: '', price: null });

  useEffect(() => {
    fetch('../../data/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((products) => {
        setProducts(products);
        setFilteredProducts(products);
        setIsLoading(false);
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);


  /* filterrriing */
  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    setFilteredProducts(filterProducts(products, newFilters));
  };
 /*  */
  const [page, setPage] = useState(1);
  const PerPage = 9;
  const count = Math.ceil(filteredProducts.length / PerPage);
  const data = usePagination(filteredProducts, PerPage);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Box style={{ flex: '1 1 20%', maxWidth: '20%' }}>
        <Sidebar handleFilterChange={handleFilterChange} />
      </Box>

      {/* Products Grid */}
      <div style={{ flex: '1 1 80%', maxWidth: '80%' }}>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Grid container spacing={2} className="productsGrid">
            {data.currentData().map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard
                  name={product.title}
                  imageUrl={product.imageUrl}
                  rating={product.rating}
                  price={product.price}
                />
              </Grid>
            ))}
          </Grid>
        )}
        {/* Pagination */}
        <Box mt={4} display="flex" justifyContent="center" className="pagination-container">
          <Pagination
            count={count}
            color="primary"
            className="pagination-row"
            page={page}
            onChange={handleChange}
          />
        </Box>
      </div>
    </div>
  );
}
