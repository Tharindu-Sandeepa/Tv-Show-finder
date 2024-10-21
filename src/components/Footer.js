import React from 'react';
import {
  Container,
  Box,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const FooterLinkItem = ({ href, iconSrc, name }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
      }}
    >
      <img
        src={iconSrc}
        alt={name}
        style={{ height: '25px', width: 'auto', marginRight: '5px' }} 
      />
      {name && <Typography variant="body2">{name}</Typography>} 
    </a>
  </Box>
);

const FooterComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1c1c1c',
        backgroundImage:
          'linear-gradient(to right, rgba(28, 28, 28, 0.9), rgba(255, 106, 106, 0.1), rgba(247, 192, 179, 0.1))',
        color: 'white',
        py: 3,
        mt: 5, 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
          }}
        >
         
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
            <MuiLink href="https://www.linkedin.com/in/tharindu-sandeepa99/" target="_blank" sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'white' }}>
              <LinkedInIcon sx={{ mr: 1 }} />
              <Typography variant="body2">LinkedIn</Typography>
            </MuiLink>
            <MuiLink href="mailto:katharindusandeepa@gmail.com" sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">katharindusandeepa@gmail.com</Typography>
            </MuiLink>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-end' }, 
              flexWrap: 'wrap', 
              mt: { xs: 2, md: 0 }, 
            }}
          >
            <FooterLinkItem href="https://www.seedr.cc/" iconSrc="/images/seedr.png" name="Seedr" />
            <FooterLinkItem href="https://magnetdl.hair/" iconSrc="/images/magnet.png" name="Magnet.dl" />
            <FooterLinkItem href="https://psa.wf/" iconSrc="/images/psa.png" name="PSA" />
            <FooterLinkItem href="https://www.1337xx.to/" iconSrc="/images/1337x.png" name="" />
          </Box>
        </Box>

      
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            &copy; {new Date().getFullYear()} Tharindu Sandeepa
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;