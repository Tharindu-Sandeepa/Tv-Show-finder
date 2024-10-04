import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import ShowCard from './components/ShowCard';
import ShowDetail from './components/ShowDetail';
import SlideShow from './components/Slideshow';
import TrendingShows from './components/TrendingShows';



const App = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
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
      <Container>
        <SearchBar onSearch={handleSearch} />
        <Grid container spacing={4}>
          {shows.map((item) => (
            <Grid item key={item.show.id} xs={12} sm={6} md={4}>
              <a href={`/show/${item.show.id}`}  rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <ShowCard show={item.show} />
              </a>
            </Grid>
          ))}
        </Grid>


        <Routes>
          <Route path="/show/:id" element={<ShowDetail />} />
         

        </Routes>
      {!query &&   <SlideShow/>}
      {!query && <TrendingShows />}

      </Container>
    </Router>
  );
};

export default App;
