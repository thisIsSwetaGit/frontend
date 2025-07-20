import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video._id}`} className="shadow-md p-2 rounded-lg">
      <img src={video.thumbnailUrl} alt={video.title} className="w-full rounded" />
      <h3 className="font-semibold mt-2">{video.title}</h3>
    </Link>
  );
};

export default VideoCard;
