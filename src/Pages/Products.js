import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Box, Grid, Pagination } from '@mui/material';
import usePagination from '../components/Pagination';
import Sidebar from '../components/Sidebar/Sidebar';
import { filterProducts } from '../utils/filterFunctions';
import Loading from '../components/Loading';
import Sorting from '../components/Sorting/Sorting';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({ color: '', company: '', series: '', price: { min: 0, max: 12000 } });
    const [sort, setSort] = useState('lowest');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../data/products.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const type = queryParams.get('type');
        
        // Update filters based on query parameter
        if (type) {
            setFilters(prevFilters => ({
                ...prevFilters,
                company: type // Use company filter to match the type
            }));
        } else {
            setFilters(prevFilters => ({
                ...prevFilters,
                company: '' // Reset filter when no type is specified
            }));
        }
    }, [location.search]);

    useEffect(() => {
        let sortedProducts = filterProducts(products, filters);
        if (sort === 'highest') {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        } else {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        }
        setFilteredProducts(sortedProducts);
    }, [filters, products, sort]);

    const handleFilterChange = (type, value) => {
        // Update filter and URL
        setFilters(prevFilters => ({
            ...prevFilters,
            [type]: value
        }));
        if (value) {
            navigate(`/products?type=${encodeURIComponent(value)}`);
        } else {
            navigate('/products'); // Clear query parameter when filter is reset
        }
    };

    const handleSortChange = (value) => {
        setSort(value);
    };

    const [page, setPage] = useState(1);
    const PerPage = 9;
    const count = Math.ceil(filteredProducts.length / PerPage);
    const data = usePagination(filteredProducts, PerPage);

    const handleChange = (e, p) => {
        setPage(p);
        data.jump(p);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Box display="flex" flexDirection="row" flex="1">
                        <Box style={{ flex: '1 1 20%', maxWidth: '20%' }}>
                            <Sidebar handleFilterChange={handleFilterChange} />
                        </Box>

                        <Box style={{ flex: '1 1 80%', maxWidth: '80%', padding: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                                <Sorting handleSortChange={handleSortChange} />
                            </div>
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
                            <Box mt={4} display="flex" justifyContent="center" className="pagination-container">
                                <Pagination
                                    count={count}
                                    color="primary"
                                    className="pagination-row"
                                    page={page}
                                    onChange={handleChange}
                                />
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
        </div>
    );
}
