import React, { memo, useState } from 'react';

const VideoCard = memo((props) => {
  const onHandleClick = () => {
    if (props.item.id.videoId) {
      const new_url = `https://www.youtube.com/embed/${props.item.id.videoId}`;
      props.onHandleClick(new_url);
      console.log(new_url);
    }
  };
  return (
    <>
      <div className='video-card' onClick={onHandleClick}>
        <img
          className='video-thumbnail'
          src={props.thumbnail.url}
          alt='thumbnails error'
        />
        <ul className='video-card-inform'>
          <span className='video-card-title'>{props.title}</span>
          <span className='video-card-channelTitle'>{props.channelTitle}</span>
        </ul>
      </div>
    </>
  );
});

export default VideoCard;
