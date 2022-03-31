import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"

function Footer() {
  return <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
          <p>&copy; A vos couleurs 2022</p> 
  </div>;
}

export default Footer;