//uer type in input
//import React from 'react;  //1
import React, { Component } from 'react';  //-> const Component =  React.Component;
/*
const SearchBar = () => {
//create HTML,  which user type into
  return <input />;  //React.createElement
};
*/

/*using es6 class, which is differnt from css calss of above,
  class based component: javascript object with propertyt and method */
//class SearchBar extends React.Component {  //1
/*
class SearchBar extends Component {
  render() {
    return <input onChange = {this.onInputChange} />;
  }
// event handler
  onInputChange(event)  {
    console.log(event.target.value);
   //console.log(event);
   }
}
*/

class SearchBar extends Component {
// initiallize state
  constructor(props) {
    super(props);  //it  enables to use parent class Component's method

    this.state = { term: '' };  // 2
  }
/*
  render() {
  //  return <input onChange = {(event) => console.log(event.target.value) } />;
    return <input onChange = { event => console.log(event.target.value) } />;
  }
*/
/*
//print output just same as input
  render() {  // 2
  //  return <input onChange = { event => this.setState({ term: event.target.value })} />;
    //this.state.term = event.target.value //BAD !!! Never Use this, Use setState()
    return (
      <div>

        <input
        onChange = { event => this.setState({ term: event.target.value })} />
        Value of the input : {this.state.term}
      </div>
    );
  }
*/
/*// nothing printed out as for input typed
  //input tells the state what it should be(input channge cause the update) //4
  render() {  // 4
    return (
      <div>
        <input
        value = {this.state.term}
        onChange = { event => this.setState({ term: event.target.value })} />
        Value printed : {this.state.term}  //with this line value printed(also this  comment shown !)
      </div>
    );
  }
} */

//can't type in the box
//input tells the state what it should be(input channge cause the update) //4
//videoSearch(term)
render() {  // 5
  return (
    <div className = "search-bar">
      <input
      value = {this.state.term}
      onChange = {event => this.setState({ term: event.target.value })} />
    </div>
  );
}

}//end of class SearchBarS

/*thie componsnt(search_bar.js must be shown to index.js
: export this code to index.js */

// const foo =  5;
//export default foo;

export default SearchBar;
