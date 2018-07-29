import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";


 var MovieListEntry = (props) => (
 	<div>{props.movie}
    <div onClick={() => props.movieListClick(props.movie)}></div>
   	</div>
 	   
 );



export default MovieListEntry;
