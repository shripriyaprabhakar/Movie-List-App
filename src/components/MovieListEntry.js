import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";


class MovieListEntry extends React.Component { 
  constructor (props) {
  	super (props);
  	this.state = {
      val: 'Watched',
  	}
  	this.update = this.update.bind(this)
  }
  
  update() {
  	console.log('clicked');
    this.setState({
      val: 'To Watch'
    });
  }

  render () {
  	return (
      <div>
 	    <li onClick={() => this.props.MovieListClick(this.props.movie)}> {this.props.movie}</li> 
 	      <button className='btn' onClick={this.update}>{this.state.val}</button>
 	    
   	  </div>
  	);
  }

}

export default MovieListEntry;
