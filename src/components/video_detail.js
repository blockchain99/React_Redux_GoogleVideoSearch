import React from 'react';
//const VideoDetail = (props) => { //props  need  to be video property
const VideoDetail = ({video}) => {

  /*Added to solve Error: Can not read property 'id' of undifined   */
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
//  const url = 'https://www.youtube.com/embed/' + videoId;  //same  below
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className = "video-detail col-md-8">
      <div class="embed-responsive embed-reponsive-16by9">
        <iframe style={{ width: 660, height: 400 }} className="embed-responsive-item" src = {url} ></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        <div>{video.id.videoId}</div>
      </div>
    </div>
  );

/*
  return (
    <div className = "video-detail col-md-8">
      <div className="embed-responsive embed-reponsive-16by9">
      <iframe  class="embed-responsive-item" width="560" height="315"
      src="https://www.youtube.com/embed/BuF05UWgji0"
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        <div>{video.id.videoId}</div>
      </div>
    </div>
  );
  */
};
export default VideoDetail;
