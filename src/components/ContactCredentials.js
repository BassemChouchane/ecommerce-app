import React, { useState } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import { Margin } from '@mui/icons-material';
import { Box, Tooltip } from '@mui/material';

export default function ContactCredentials () {
    const [loc,setLoc] = useState(false);
    
    function handleClick (){
        setLoc(!loc);
    }


    return (
      <Box className='ContactCreds'>
        <div>
            <EmailOutlinedIcon />
            <span>unknown@gmail.com</span>
        </div>
        <div>
            <PhoneInTalkOutlinedIcon />
            <span>+216 45 871 233</span>
        </div>
        <div className='location'>
            <div style={{marginLeft : 0}}>
            <Tooltip title="Click here to display map">
                <AddLocationAltOutlinedIcon onClick={handleClick}/>
            </Tooltip>
                <span>Thivon 257, Peristeri 121 35, Grèce</span>
            </div>
            {loc && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.2259681473705!2d23.693626817661443!3d38.02123517222454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a31f9494eeb3%3A0x7bc6b758b91c1b3c!2zQmVuamFtaW4gTW9vcmUgzqfPgc-OzrzOsc-EzrEgLSDOkc6TzpPOlc6bzpHOpM6fzqMgzpnOqc6Rzp3Onc6XzqMgLSBBdXRob3JpemVkIERlYWxlcg!5e0!3m2!1sfr!2stn!4v1723800466536!5m2!1sfr!2stn" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> }
        </div>
      </Box>
    )
  
}
