import { Search } from '@mui/icons-material';
import { Box, Tooltip, Typography } from '@mui/material';
import { shadows } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import SelectCategory from '../components/SelectCategory';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

export default function Home(){
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('../../data/products.json')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(products => setProducts(products))
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, []);

    const [over, setOver] = useState(false);
    function handleOver (){
        setOver(true);
    }
    function handleOut (){
        setOver(false);
    }

    const [searchValue , setSearchValue] = useState();
    const [filteredSearch , setFilteredSearch] = useState(products);
    
    function handleChange(e) {
        // setOver(true);
        const inputValue = e.target.value;
        setSearchValue(inputValue);
        
        const searchTerms = inputValue.toLowerCase().split(' ').filter(Boolean);
    
        const filtered = products.filter((product) => {
            const title = product.title.toLowerCase();
            return searchTerms.every(term => title.includes(term));
        });
    
        setFilteredSearch(filtered);
    }
    const [hover,setHover] = useState(false)
    function handleHover (){
        setHover(true)
    }   
    
    function removeLastNWords(title, numWordsToRemove) {
        const words = title.split(' ');
        return words.slice(0, -numWordsToRemove).join(' ');
    }



    return(
        <Box className="main">
        <Box className='home' sx={{boxShadow : 2}}>
            <br /><br />
            <br /><br />
                <Typography variant='h2' component='h1'>
                &nbsp; EVERYTHING <span>is Available</span>
                </Typography>
                <Typography variant='h3' component='h2'>
                    <span>SEARCH NOW</span>
                </Typography>
                <Box className="searchfield">
                    <input type="text" className="search" name="search"
                    placeholder='Search your desired product' onMouseOver={handleOver} onMouseOut={handleOut} onChange={handleChange}/>
                    <Tooltip title="Search">
                        <SearchIcon sx={{margin: 'auto'}}/> 
                    </Tooltip> 
                </Box>
                {over ? <Typography variant='h6' component='h3' 
                fontSize={20} paddingTop={5}>We have the largest collection of Laptops &#128512;
                </Typography> : null }  
                <ul>
                {searchValue && filteredSearch.map((product)=>
                    <li className='searchList' key={product.id} >
                        
                        <Link to={`/products/${product.id}`}>
                            {removeLastNWords(`${product.title}`,6)}
                        </Link>
                        
                    </li> 
                    
                )
                }
                </ul> 
            </Box>
            <Box className="listCategories">
                    <Typography variant='h4' component='h5'>Choose Any category</Typography>
                    <Typography variant='h3' component='h4'>Buy everything with us</Typography>
                    <Categories />
            </Box>
            
            </Box>
    )
}