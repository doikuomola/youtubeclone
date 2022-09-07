import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
          spacing={2}
          
      sx={{ backgroundColor: '#000', position: 'sticky', top: 0, pt:2  }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}
