import { Button, FormControl, FormHelperText, OutlinedInput, useFormControl } from '@mui/material'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import contactLogo from '../assets/contactPicture.png'

export default function ContactForm () {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_l8f4uj3', 'template_nd0xk0a', form.current, {
          publicKey: 'DCdSvdbl4uiQE73uv',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    function MyFormHelperText(props) {
        const { focused } = useFormControl() || {};
    
        const helperText = React.useMemo(() => {
          if (focused) {
            return `Please enter your ${props.type}`;
          }
    
          return;
        }, [focused]);
    
        return <FormHelperText>{helperText}</FormHelperText>;
      }

    return (
      <div className='ContactForm'>
        <img src={contactLogo} alt="Contact Logo" />
        <h4>Please fill this form in a decent manner</h4>
        <form ref={form} onSubmit={sendEmail}>
          <div className='textdiv'> 
          <FormControl   >
            <label>Name<span className='requireed'>*</span></label>
            <OutlinedInput type="text" name="from_name" required className='text' />
            <MyFormHelperText type="name" />
          </FormControl>
          <FormControl  >
            <label>Email<span className='requireed'>*</span></label>
            <OutlinedInput type="text" name="email" required className='text'/>
            <MyFormHelperText type="email" />
          </FormControl>
          </div>
          <FormControl fullWidth margin="normal">
            <label>Message</label>
            <textarea name="message" placeholder='What can we help you with?'/>
            <MyFormHelperText type="message" />
          </FormControl>
          <Button variant="contained" type = "submit" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </div>
    )
  }


