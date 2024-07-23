import React, { useState } from 'react';
import { TextField, Button, Box, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" justifyContent="center" mb={4} mt={6}>
      <TextField
        placeholder="Search TV Shows"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          backgroundColor: '#717171',
          color: 'white',
          borderRadius: '35px',
          width: '900px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '35px',
            '& fieldset': {
              border: 'none',
            },
          },
          '& .MuiOutlinedInput-input': {
            padding: '10px',
            color: 'white',
          },
          '& .MuiInputLabel-root': {
            color: '#717171',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton sx={{ color: 'white' }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          ml: 2,
          borderRadius: '35px',
          backgroundColor: '#4285F4', 
          color: 'white',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#357AE8', 
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
