import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPi';
import Videos from './Videos';

export default function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for:{' '}
        <span style={{ color: '#f31503' }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}
