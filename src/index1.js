import React, {Component} from 'react'; //3
import ReactDOM from 'react-dom';
/* import file  is differnt from above library(dir)
it needs actual path */
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList  from './components/video_list';
import VideoDetail  from './components/video_detail';
const API_KEY = 'my_api_key';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, ( videos ) => {

      this.setState({
        videos:  videos,
        selectedVideo: videos[0]
       });
    });
}  //end of constructor
render() {
  return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo =>  this.setState({selectedVideo})}
        videos = {this.state.videos} />
    </div>
  );
}  //end of  render
}  //end  of  class App
