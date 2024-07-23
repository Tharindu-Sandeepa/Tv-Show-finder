import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box } from '@mui/material';

const fadeImages = [
  {
    url: '/images/lowkey.jpg',
  },
  {
    url: '/images/hdrgn.jpg',
  },
  {
    url: '/images/seee.jpg',
  },
  {
    url: '/images/boi3.jpg',
  },
];

const Slideshow = () => {
  return (
    <Box sx={{ mt:7,width: '100%', maxHeight: '400px', overflow: 'hidden', borderRadius: '16px' }}>
      <Fade duration={1200} arrows={false}>
        {fadeImages.map((fadeImage, index) => (
          <Box key={index}>
            <img src={fadeImage.url} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' }} />
          </Box>
        ))}
      </Fade>
    </Box>  
  );
};

export default Slideshow;
