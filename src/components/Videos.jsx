import { Box, Stack } from '@mui/material';
import React from 'react';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

export default function Videos({ videos, direction, display }) {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      sx={{ display: { xs: display, md: 'flex' } }}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item?.id?.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}
