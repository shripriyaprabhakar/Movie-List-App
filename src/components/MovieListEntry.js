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
 	    <li onClick={() => this.props.movieListClick(this.props.movie)}> {this.props.movie}
 	      <button onClick={this.update}>{this.state.val}</button>
 	    </li> 
   	  </div>
  	);
  }

}

export default MovieListEntry;
