import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Slide, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { useScrollTrigger } from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


// Create a styled Typography component for the logo
const LogoTypography = styled(Typography)`
font-family: 'Dancing Script', cursive;  font-size: 24px;
  background: linear-gradient(90deg, #00FFFF, #00FFFF, #00FFFF, #00CED1, #7FFFD4);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  animation: glow 1s infinite alternate;

  @keyframes glow {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.5);
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5);
    }
  }
`;

// Component for individual link items
const LinkItem = ({ href, iconSrc, name }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      <img src={iconSrc} alt={name} style={{ width: '30px', height: '30px', marginRight: '5px' }} />
      <Typography variant="body1">{name}</Typography>
    </a>
  </Box>
);

const AppBarComponent = () => {
  const trigger = useScrollTrigger();
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the menu open/close

  // Handle menu opening
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu item selection
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Slide direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#1c1c1c', // Dark background
          backgroundImage: 'linear-gradient(to right, rgba(28, 28, 28, 0.9), rgba(255, 106, 106, 0.1), rgba(247, 192, 179, 0.1))', // Colorful background gradient
          backdropFilter: 'blur(10px)', // Blur effect
          boxShadow: 'none',
        }}
      >
        <Container>
          <Toolbar>
          <LogoTypography
  variant="h6"
  sx={{ flexGrow: 1 }}
  component={Link}  // Use Link component
  to="/"            // Navigate to the homepage
  style={{ textDecoration: 'none' }} // Remove underline
>
  Show Finder
</LogoTypography>

            {/* Mobile Menu Icon */}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenuClick}
              sx={{ display: { xs: 'block', md: 'none' } }} // Show only on XS screens
            >
              <MenuIcon />
            </IconButton>

            {/* Links for larger screens */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-end' }}>
              <LinkItem href="https://www.seedr.cc/" iconSrc="/images/seedr.png" name="Seedr" />
              <LinkItem href="https://magnetdl.hair/" iconSrc="/images/magnet.png" name="Magnet.dl" />
              <LinkItem href="https://psa.wf/" iconSrc="/images/psa.png" name="PSA" />
              <LinkItem href="https://www.1337xx.to/" iconSrc="/images/1337x.png" name="1337" />
            </Box>

            {/* Menu for mobile */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: '#1c1c1c', // Dark background for menu
                  color: 'white', // White text color
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <LinkItem href="https://www.seedr.cc/" iconSrc="/images/seedr.png" name="Seedr" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <LinkItem href="https://magnetdl.hair/" iconSrc="/images/magnet.png" name="Magnet.dl" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <LinkItem href="https://psa.wf/" iconSrc="/images/psa.png" name="PSA" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <LinkItem href="https://www.1337xx.to/" iconSrc="/images/1337x.png" name="1337" />
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default AppBarComponent;