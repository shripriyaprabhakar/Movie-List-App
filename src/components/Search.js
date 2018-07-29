import React from "react";
import ReactDOM from "react-dom";

var Search = (props) => (
 <div>
 	<input  onChange={props.onChange} className="form-control" type="text" placeholder="search"/>
 	<button onClick={props.onClick} className="btn hidden-sm-down" >
 		<span className="glyphicon glyphicon-search"> Go </span>
    </button>
    <input className="form-control" type="text" placeholder="add movie title"/>
 	<button className="btn hidden-sm-down">
 		<span className="glyphicon glyphicon-search"> ADD </span>
    </button>
 </div>
);

export default Search;