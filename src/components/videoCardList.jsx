import React, { memo, useCallback, useState } from 'react';
import VideoCard from './videoCard';
const VideoCardList = memo((props) => {
  const handleClick = (url) => {
    props.onHandleClick(url);
  };
  return (
    <>
      {props.url && (
        <>
          <iframe
            width='640'
            height='360'
            src={props.url}
            frameborder='0'
          ></iframe>
        </>
      )}
      <ul className='video-card-list'>
        {props.items.map((item) => (
          <VideoCard
            key={item.etag}
            videoId={item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
            thumbnail={item.snippet.thumbnails.high}
            channelTitle={item.snippet.channelTitle}
            onHandleClick={handleClick}
            item={item}
          />
        ))}
      </ul>
    </>
  );
});

export default VideoCardList;
