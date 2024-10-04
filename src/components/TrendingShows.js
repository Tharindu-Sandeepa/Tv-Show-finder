import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const TrendingShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        const sortedShows = response.data.sort((a, b) => b.rating.average - a.rating.average).slice(0, 10);
        setShows(sortedShows);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <Container>
      <Typography variant="h6" gutterBottom sx={{mt:2}}>Trending TV Show️‍s 🔥</Typography>
      <Grid container spacing={4}>
        {shows.map((show) => (
          <Grid item key={show.id} xs={12} sm={6} md={4}>
            <Link to={`/show/${show.id}`} style={{ textDecoration: 'none' }}>
            <Card  style={{ backgroundColor: '#1c1c1c', color: 'white', borderRadius: '10px', overflow: 'hidden' }} sx={{mt:2 ,'&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}}>
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
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingShows;
