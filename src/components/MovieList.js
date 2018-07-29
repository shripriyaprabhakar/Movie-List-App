import React from "react";
import ReactDOM from "react-dom";
import MovieListEntry from "./MovieListEntry";
import Search from "./Search";



var MovieList = (props) => (
	<div>
		{props.movies.map ( (movie,index) =>
		   <MovieListEntry movie = {movie.title} key = {index}
		   MovieListClick = {props.onClick}
		   />
		)}
	
    </div>
    
);	
    

export default MovieList;