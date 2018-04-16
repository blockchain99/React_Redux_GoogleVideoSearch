//uer type in input
/*//1st try
import React from 'react';
const SearchBar = () => {
  return <input />;
};
export default SearchBar;
*/
/* //2nd try
import React { Component } from 'react';
class SearchBar extends Component {
render() {
  return <input onChange={this.onInputChange}/>;
  };
onInputChange(event){
  console.log(event.target.value);
  }
}
export default SearchBar;
*/
/* //3rd try
import React { Component } from 'react';
class SearchBar extends Component {
render() {
  return <input onChange={(event) =>console.log(event.target.value) }/>;
  };
}
export default SearchBar;
*/
/* //4th try
import React { Component } from 'react';
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
render() {
  return <input onChange={ event => this.setState({term: event.target.value})}/>;
  };
}
export default SearchBar;
*/
import React, { Component } from 'react';
/* //same as below: syntatic sugar
import React from 'react';
const Component =  React.Component; */

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
      onChange = {event => this.onInputChange(event.target.value)} />
    </div>
  );
}

onInputChange(term) {
  this.setState({term});
  this.props.onSearchTermChange(term);
}
}//end of class SearchBarS

/*thie componsnt(search_bar.js must be shown to index.js
: export this code to index.js */

// const foo =  5;
//export default foo;

export default SearchBar;
