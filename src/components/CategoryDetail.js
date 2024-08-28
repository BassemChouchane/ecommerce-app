import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CategoryDetail (props) {
    return (
      <div>
        <Accordion sx={{boxShadow : 0, opacity : 0}}  className='categoryDetails'>
        <AccordionSummary sx={{display: 'flex', justifyContent:'space-between'}}
          expandIcon={<ExpandMore sx={{opacity : 0}} className='expandIcon'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" component="h4" style={{color:'black'}}>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='categoryDescription' sx={{opacity: 0}}>
            {props.description}
          </Typography>
        </AccordionDetails>
        <NavLink to ><button class="button-28" role="button">View All</button></NavLink>
      
      {/*  !!!!!!!!!!
      
      we need to make the button  display all products with same type
      
      1.in the products page (after applying filter /products?type=dell
      
      ||   2. in another path (not realistic)
            !!!!!!!!!!!!!!!!!!
      
      */}
      
      
      </Accordion>
      </div>
    )
  
}
