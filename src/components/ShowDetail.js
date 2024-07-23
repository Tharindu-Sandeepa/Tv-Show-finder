import React, { useState, useEffect } from 'react';
import { Card, Grid, Container, Link, Typography, Chip } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {

    window.scrollTo(0, 0);

    const fetchShowDetail = async () => {
      try {
        const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };
    fetchShowDetail();
  }, [id]);

  if (!show) {
    return <Typography variant="h6">Loading...</Typography>;
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

  return (
    <Container style={{ padding: '20px', backgroundColor: '#141414', color: 'white' }} sx={{ mt: 9}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {image.original && <img src={image.original} alt={name} style={{ maxWidth: '100%', borderRadius: '10px' }} />}
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">{name}</Typography>
          {type && <Typography><strong>Type:</strong> {type}</Typography>}
          {language && <Typography><strong>Language:</strong> {language}</Typography>}
          {genres.length > 0 && <Typography><strong>Genres:</strong> {genres.join(', ')}</Typography>}
          {status && <Typography><strong>Status:</strong> {status}</Typography>}
          {premiered && <Typography><strong>Premiered:</strong> {premiered}</Typography>}
          {officialSite && <Typography><strong>Official Site:</strong> <Link href={officialSite} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{officialSite}</Link></Typography>}
          {schedule.days && schedule.days.length > 0 && schedule.time && <Typography><strong>Schedule:</strong> {schedule.days.join(', ')} at {schedule.time}</Typography>}
          {rating.average !== undefined && (
            <Chip
              icon={<StarIcon />}
              label={`Rating: ${rating.average}`}
              style={{ backgroundColor: 'gold', color: 'black', fontWeight: 'bold', marginTop: '10px' }}
            />
          )}
          {network?.name && network?.country?.name && <Typography><strong>Network:</strong> {network.name} ({network.country.name})</Typography>}
          {webChannel?.name && webChannel?.country && <Typography><strong>Web Channel:</strong> {webChannel.name} ({webChannel.country.name})</Typography>}
          {externals.imdb && <Typography><strong>IMDb:</strong> <Link href={`https://www.imdb.com/title/${externals.imdb}`} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{externals.imdb}</Link></Typography>}
          {summary && <Typography dangerouslySetInnerHTML={{ __html: summary }} style={{ marginTop: '20px' }} />}
          {_links.previousepisode && <Typography><strong>Previous Episode:</strong> <Link href={_links.previousepisode.href} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{_links.previousepisode.name}</Link></Typography>}
          {_links.nextepisode && <Typography><strong>Next Episode:</strong> <Link href={_links.nextepisode.href} target="_blank" rel="noopener noreferrer" style={{ color: 'cyan' }}>{_links.nextepisode.name}</Link></Typography>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShowDetail;
