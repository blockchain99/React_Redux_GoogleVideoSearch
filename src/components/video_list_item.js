import React from 'react';

/*
const VideoListItem = (props) => { //props object    //9
//*in video_list, we pass video as property video
  const video = props.video; //pull off video property from props object //9
  return <li>Video</li>
};
*/
//{video} - has property of video : es6 syntax
//above changed to pass properties, video and onVideoSelect asf.
const VideoListItem = ({video, onVideoSelect}) => {  //13
  //same as 13
  /*
  const video = props.video
  const onVideoSelect = props.onVideoSelect
  */
  const imageUrl = video.snippet.thumbnails.default.url;
//  console.log(video);
//  return <li>Video</li>
//*Use bootstrap class
   return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
   );
};

export default VideoListItem;
