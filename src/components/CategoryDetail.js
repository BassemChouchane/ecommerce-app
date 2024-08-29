import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryDetail(props) {
    return (
        <div>
            <Accordion sx={{ boxShadow: 0, opacity: 0 }} className='categoryDetails'>
                <AccordionSummary
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                    expandIcon={<ExpandMore sx={{ opacity: 0 }} className='expandIcon' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h3" component="h4" style={{ color: 'black' }}>
                        {props.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='categoryDescription' sx={{ opacity: 0 }}>
                        {props.description}
                    </Typography>
                </AccordionDetails>
                <Link to={`/products?company=${encodeURIComponent(props.name)}`}>
                    <button variant="contained" color="primary" className="button-28">
                        View All
                    </button>
                </Link>
            </Accordion>
        </div>
    );
}
