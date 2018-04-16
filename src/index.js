import _ from 'lodash';
//import React from 'react';  //3
import React, {Component} from 'react'; //3
import ReactDOM from 'react-dom';
/* import file  is differnt from above library(dir)
it needs actual path */
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList  from './components/video_list';
import VideoDetail  from './components/video_detail';
const API_KEY = 'AIzaSyCTWQ0-1tjXMJ-VWYDLnl5EiHwwNkvCIHo';

/*  //4
//configuration function: search term , callback function
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});
*/

//Create new component .  This component should produce
//Some HTML
/* const naver change, but var  can  change */
/*boiler plate package(babel/webpack) translate jsx into vanilla javaScript
,which can be understood by webbrowser */
//jax syntax
/*
const App = function() {  //this is Class not instance.
  return <div>Hi !</div>;
}
*/

//new es6 syntax :  () =>
/*
const App = () => {
  return <div>Hi !</div>;
}
*/
//base component :  App, functional based component, so no  state,
// (so no mechanism of channging data over time)
/*  //3
const App = () => {  //functioanl component
  return (
    <div>
      <SearchBar />
    </div>
  );
*/
/*
//video search result(data) changing  over time
// conduct new search -> set the new result of search  to new state
// so need constructor
class App extend Component {   //  classs base Comoponent   //3
  constructor(props) {
    super(props);
    //property name of state -> videos, totally up to us
    this.state = { videos: []}; //name  of  term(represent search term)
  //  YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {   //4
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {   //6
    //  console.log(data); //5  changed to show  new  list of  videos
      this.setState({videos: data});
    });
  }  //end of constructor
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }  //end of  render
}  //end  of  class App
*/
//syntatic sugar : data can be  any words, so I changed it  to videos(same as
//key name, videos), In this case, I  can use one "videos" argument
//which all  represent key value: (videos) => {  this.setState ({videos: videos })}
//passing data fm parent compont to child component : videos = {this.state.videos}
class App extends Component {   //  classs base Comoponent   //3
  constructor(props) {
    super(props);
    //property name of state -> videos, totally up to us
  /*  this.state = { videos: []}; //name  of  term(represent search term)  */
    this.state = {  //12
      videos: [],
      selectedVideo: null  // 11
    };
/*
  //  YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {   //4
    YTSearch({key: API_KEY, term: 'surfboards'}, ( videos ) => {   //6  //7
    //  console.log(data); //5  changed to show  new  list of  videos
      this.setState({ videos });   //7
    });  */
  //* Implementing selectedVideo instead of  this.state.videos[0]
    //  YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {   //4

    this.videoSearch('surfboards');
  }  //end of constructor

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, ( videos ) => {   //6  //7
    //  console.log(data); //5  changed to show  new  list of  videos
      this.setState({
        videos:  videos,
        selectedVideo: videos[0]   // 12
       });
    });
  }

  /* <VideoDetail video={this.state.videos[0]} />  //in return()
  In stead of above, ruturning first video, We return the selected video.
  - step2 (implementing  callback) : pass index.js(App) to video_list
  and finally video_List_item
  :  onVideoSelect is passed as property, In video_list, props.onVideoSelect
  is passed as argument*/
  render() {
/* need to add throttle for  videoSearch */  //13
/*debounce call videoSrarch() every other 300 milisecs   */
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>  this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    );
  }  //end of  render
}  //end  of  class App

//Take this  component's generated HTML and put it on
//the page(in the DOM)
//React.render(App);
//ReactDOM.render(App);  //Error
/*bundle.js:1151 Uncaught Error: ReactDOM.render():
 Invalid component element. Instead of passing a component class,
  make sure to instantiate it by passing it to React.createElement.
  ->  sol: making instance by jsx tag <App /> */
//ReactDOM.render(<App />);  //Still error
/* bundle.js:1211 Uncaught Error: _registerComponent(...):
 Target container is not a DOM element.   */
ReactDOM.render( <App />, document.querySelector('.container') );
/* render & insert it to existing HTML(2nd argument), which
is target DOM node(container) : pass  reference to  the container in
index.html
(In  index.HTML  <div class="container"></div> )
*/
/************************************************************************/
/* Phase 2 : vidoeSearch implementatoin */
