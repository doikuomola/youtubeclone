import { IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid  #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: '5px' },
        display: 'flex',
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
}
