import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const ShowCard = ({ show }) => {
  return (
    <Card style={{ backgroundColor: '#1c1c1c', color: 'white', borderRadius: '10px', overflow: 'hidden' }} sx={{
      mt: 2,
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={show.image ? show.image.medium : 'https://via.placeholder.com/210x295'}
          alt={show.name}
          style={{ filter: 'brightness(0.8)' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ color: 'cyan' }}>
            {show.name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p" style={{ color: '#b0b0b0' }}>
            Genres: {show.genres.join(', ')}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p" style={{ color: '#b0b0b0' }}>
            Language: {show.language}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p" style={{ color: '#b0b0b0' }}>
            Status: {show.status}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p" style={{ color: '#b0b0b0' }}>
            Premiered: {show.premiered}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ShowCard;
