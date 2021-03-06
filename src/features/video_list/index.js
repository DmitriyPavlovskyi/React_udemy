import React from 'react';
import VideoListItem from '../video_list_item/index';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    )
  });

  return (
    <ul className="col-md-4 list-group d-inline-block">
      {videoItems}
    </ul>
  );
};

export default VideoList;
