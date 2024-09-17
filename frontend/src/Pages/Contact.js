import React, { useRef, useState } from 'react';

import { Grid, FormControl, FormHelperText, OutlinedInput, useFormControl, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactCredentials from '../components/ContactCredentials';
import ContactForm from '../components/ContactForm';
export const Contact = () => {

    
  const [creds, setCreds] = useState(false);
    
  function handleClick() {
    setCreds(!creds); 
  }


  return (
    <Grid container spacing={4} className='contact'>
      <Grid item xs={12} md={6} className={`Contact-col1 ${creds ? 'active' : 'notactive'}`}>
         <div className={`text-content ${creds ? 'active' : 'notactive'}`}>
       {!creds && <h1>Contact Us</h1>} 
          <p>
            Need to get in touch with us? Either fill out the form with your inquiry or find other ways you'd like to &nbsp;
            <Link to="." onClick={handleClick} className='contactLink'>contact below</Link>
          </p>
        </div>
        {creds && <ContactCredentials />}
      </Grid>

      <Grid item xs={12} md={6} className='Contact-col2'>
        <ContactForm />
      </Grid>
    </Grid>
  );
};
