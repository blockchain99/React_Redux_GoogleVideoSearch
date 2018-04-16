import React from 'react';
import VideoListItem from './video_list_item';
//need to add css class
//const VideoList = () => {

//warning : Each child in an array or iterator should have a unique "key" prop.
//* Check the render method of `VideoList` -> changed to below, below  //8
//* props means properties of  argument to be passed.
const VideoList = (props) => {  //props come from App(index.js)as argument
  //in the form of object.
  //const videos = props.videos; //7
  const videoItems = props.videos.map((video) => {
  //  return <VideoListItem video={video} />   //8
//*add unique key, etag of video from devtool chrome: network/search?part=
//* passed  props to  VideoListItem
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}; //end of const VideoList
export default VideoList;
