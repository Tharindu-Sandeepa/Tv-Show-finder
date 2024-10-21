import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ShowCard = ({ show }) => {
  return (
    <Card 
      style={{ 
        backgroundColor: '#1c1c1c', 
        color: 'white', 
        borderRadius: '10px', 
        overflow: 'hidden', 
        position: 'relative' 
      }} 
      sx={{
        width: { xs: '120px', md: '270px' },  
        height: { xs: '180px', md: '400px' },
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s, box-shadow 0.3s',
        },
      }}
    >
      <CardActionArea>
      
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            sx={{
              height: { xs: 110, sm: 200, md: 300 }, 
            }}
            image={show.image ? show.image.medium : 'https://via.placeholder.com/210x295'}
            alt={show.name}
            style={{ filter: 'brightness(0.85)', transition: 'filter 0.3s' }} 
          />
          
          {/* Fade effect over the image */}
          {/* <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
              zIndex: 1,
            }}
          /> */}
          
       
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              padding: '0.5px 8px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              color: '#FFD700',
              zIndex: 2,
            }}
          >
            <StarIcon sx={{ fontSize: { xs: '0.7rem', md: '1rem' }, mr: 0.5 }} />
            <Typography 
              sx={{ fontSize: { xs: '0.5rem', md: '1rem' } }}
            >
              {show.rating?.average ? show.rating.average : 'N/A'}
            </Typography>
          </Box>
        </Box>

        
        <CardContent 
          sx={{ 
            background: 'linear-gradient(to top, #1c1c1c, transparent)',
            zIndex: 2,
            position: 'relative'
          }}
        >
          
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            sx={{ fontSize: { xs: '0.8rem', md: '1.5rem' }, color: 'cyan' }}
          >
            {show.name}
          </Typography>

         
          <Typography 
            variant="subtitle2" 
            color="textSecondary" 
            component="p" 
            style={{ color: '#b0b0b0', textAlign: 'center', marginTop: '10px' }}
            sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}
          >
            {show.premiered}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ShowCard;