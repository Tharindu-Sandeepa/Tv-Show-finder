import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import ShowCard from './components/ShowCard';
import ShowDetail from './components/ShowDetail';
import SlideShow from './components/Slideshow';
import TrendingShows from './components/TrendingShows';
import AppBarComponent from './components/AppBarComponent';

const App = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchShows();
  }, [query]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <Router>
       <AppBarComponent />
      <Container sx={{mt:10}}>
        <SearchBar onSearch={handleSearch} />
        <Grid 
          container 
          spacing={2} 
          justifyContent="center"
          sx={{
            // Define a grid layout for 3 cards per row on XS and 4 on MD
            // gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' },
            // gap: 2,
          }}
        >
          {shows.map((item) => (
            <Grid item key={item.show.id} xs={4} sm={6} md={3}>
              <a href={`/show/${item.show.id}`} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <ShowCard show={item.show} />
              </a>
            </Grid>
          ))}
        </Grid>

        <Routes>
       
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>

        {!query && <SlideShow />}

        {!query && 
        <TrendingShows />}
      </Container>
    </Router>
  );
};

export default App;