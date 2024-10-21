import React, { useState, useEffect } from 'react';
import { Grid, Container, Link, Typography, Chip, Button, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';
import sfLogo from './sf3.png'; 


const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchShowDetail = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };
    fetchShowDetail();
  }, [id]);

  if (!show) {
    return (
      <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#141414',
        color: 'white',
        mt: 9,
        padding: { xs: '10px', sm: '20px' },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
      
        <Box
          component="img"
          src={sfLogo} 
          alt="Logo"
          sx={{
            width: { xs: '100px', md: '150px' }, 
            mb: 7, 
          }}
        />
        <CircularProgress
          sx={{
            color: 'white',
            size: { xs: 40, md: 60 }, 
          }}
        />
        <Typography
          variant="h6"
          sx={{ mt: 2 }}
        >
          Loading...
        </Typography>
      </Box>
    </Container>
    );
  }

  const {
    name = 'No Name Available',
    type = 'N/A',
    language = 'N/A',
    genres = [],
    status = 'N/A',
    premiered = 'N/A',
    officialSite = '',
    schedule = {},
    rating = {},
    network = {},
    webChannel = {},
    externals = {},
    image = {},
    summary = '',
    _links = {}
  } = show;

  // Function to generate external URLs based on show name
  const generateExternalLinks = (showName) => {
    const encodedName = encodeURIComponent(showName.toLowerCase());
    return {
      '1337x': `https://www.1337xx.to/search/${encodedName}/1/`,
      'PSA': `https://psa.wf/?s=${encodedName}`
    };
  };

  const externalLinks = generateExternalLinks(name);

  return (
    <Container sx={{ padding: { xs: '10px', sm: '20px' }, backgroundColor: '#141414', color: 'white', mt: 9 }}>
      <Grid container spacing={3}>
      
        <Grid item xs={12} md={4}>
          {image.original && (
            <img
              src={image.original}
              alt={name}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          )}
        </Grid>

       
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>{name}</Typography>
          {type && <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}><strong>Type:</strong> {type}</Typography>}
          {language && <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}><strong>Language:</strong> {language}</Typography>}
          {genres.length > 0 && <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}><strong>Genres:</strong> {genres.join(', ')}</Typography>}
          {status && <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}><strong>Status:</strong> {status}</Typography>}
          {premiered && <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}><strong>Premiered:</strong> {premiered}</Typography>}
          {officialSite && (
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <strong>Official Site:</strong> <Link href={officialSite} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{officialSite}</Link>
            </Typography>
          )}
          {schedule.days && schedule.days.length > 0 && schedule.time && (
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <strong>Schedule:</strong> {schedule.days.join(', ')} at {schedule.time}
            </Typography>
          )}
          {rating.average !== undefined && (
            <Chip
              icon={<StarIcon />}
              label={`Rating: ${rating.average}`}
              sx={{ backgroundColor: 'gold', color: 'black', fontWeight: 'bold', marginTop: '10px' }}
            />
          )}
          {network?.name && network?.country?.name && (
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <strong>Network:</strong> {network.name} ({network.country.name})
            </Typography>
          )}
          {webChannel?.name && webChannel?.country && (
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <strong>Web Channel:</strong> {webChannel.name} ({webChannel.country.name})
            </Typography>
          )}
          {externals.imdb && (
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <strong>IMDb:</strong> <Link href={`https://www.imdb.com/title/${externals.imdb}`} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{externals.imdb}</Link>
            </Typography>
          )}
          {summary && (
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: summary }} sx={{ marginTop: '20px', fontSize: { xs: '0.9rem', sm: '1rem' } }} />
          )}
          {_links.previousepisode && (
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <strong>Previous Episode:</strong> <Link href={_links.previousepisode.href} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{_links.previousepisode.name}</Link>
            </Typography>
          )}
          {_links.nextepisode && (
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <strong>Next Episode:</strong> <Link href={_links.nextepisode.href} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{_links.nextepisode.name}</Link>
            </Typography>
          )}

         
          <Box sx={{ mt: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            {/* 1337x Link */}
            {/* <Button
              variant="contained"
              color="primary"
              startIcon={<img src="/images/1337x.png" alt="1337x" style={{ width: '20px', height: '20px' }} />}
              href={externalLinks['1337x']}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#1c1c1c',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#333333',
                },
                width: { xs: '100%', sm: 'auto' }, // Full width on XS, auto on SM and above
                textTransform: 'none', // Keep text as is
                padding: '8px 16px',
              }}
            >
              Search on 1337x
            </Button> */}

          
            <Button
              variant="contained"
              color="primary"
              startIcon={<img src="/images/psa.png" alt="PSA" style={{ width: '20px', height: '20px' }} />}
              href={externalLinks['PSA']}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#1c1c1c',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#333333',
                },
                width: { xs: '100%', sm: 'auto' }, 
                textTransform: 'none', 
                padding: '8px 16px',
              }}
            >
              Search on PSA
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShowDetail;