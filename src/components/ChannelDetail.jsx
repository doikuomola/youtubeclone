import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPi';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

export default function ChannelDetail({ channelDetail }) {
  const { id } = useParams();
  const [channelInfo, setChannelInfo] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelInfo(data?.items[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setChannelVideos(data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box sx={{ minHeight: '95vh' }}>
      <Box>
        <div
          style={{
            background: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelInfo} marginTop="-100px" />
      </Box>
      <Box sx={{ display: 'flex', p: 2 }}>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
}
