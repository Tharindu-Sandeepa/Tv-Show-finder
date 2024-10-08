import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Slide,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import sfLogo from './sf3.png'; // Import your logo image

// Component for individual link items
const LinkItem = ({ href, iconSrc, name }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
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
        style={{ height: '30px', width: 'auto', marginRight: '5px' }} // Uniform height with auto width
      />
      {name}
    </a>
  </Box>
);

const AppBarComponent = () => {
  const trigger = useScrollTrigger();
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the menu open/close

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Slide direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#1c1c1c', // Dark background
          backgroundImage:
            'linear-gradient(to right, rgba(28, 28, 28, 0.9), rgba(255, 106, 106, 0.1), rgba(247, 192, 179, 0.1))', // Colorful background gradient
          backdropFilter: 'blur(10px)', // Blur effect
          boxShadow: 'none',
        }}
      >
        <Container>
          <Toolbar>
            {/* Logo Image with responsive sizing using Box */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                justifyContent: 'flex-start', // Align logo to the left
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <Box
                component="img"
                src={sfLogo}
                alt="Show Finder Logo"
                sx={{padding:-10,
                  height: { xs: '50px', sm: '60px', md: '70px' }, // Responsive heights
                }}
              />
            </Box>

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
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                justifyContent: 'flex-end',
              }}
            >
              <LinkItem href="https://www.seedr.cc/" iconSrc="/images/seedr.png" name="Seedr" />
              <LinkItem href="https://magnetdl.hair/" iconSrc="/images/magnet.png" name="Magnet.dl" />
              <LinkItem href="https://psa.wf/" iconSrc="/images/psa.png" name="PSA" />
              <LinkItem href="https://www.1337xx.to/" iconSrc="/images/1337x.png" name="" />
            </Box>

            {/* Menu for mobile */}
            <Menu
            sx={{mt:1}}
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
                <LinkItem href="https://www.1337xx.to/" iconSrc="/images/1337x.png" name="" />
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default AppBarComponent;