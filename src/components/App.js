import React, {Component} from "react";
import ReactDOM from "react-dom";
import MovieList from "./MovieList";
import MovieListEntry from "./MovieListEntry";
import Search from "./Search";
import moviedata from "../data/moviedata";

class App extends React.Component {

  constructor(props) {

    super(props); 
    this.state = {
      movies: moviedata,
      query: '',
      filteredMovies: moviedata,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleAddEvent = this.handleAddEvent.bind(this);
   
  }
 
  handleChange(event) {
     // console.log(event.target.value);
    this.setState({query: event.target.value});
  }
  

  handleClick(event) {
    //console.log(event.target.value);
    var query = this.state.query;
    this.setState({currentMovie: this.state.query});
    var newOption = this.state.movies.filter(function (movie){
      // console.log('movie:', movie);
      // console.log('query:', query);
      return movie.title === query;
    });
    this.setState({filteredMovies: newOption});
    console.log(newOption);
  }

  // handleAddEvent(event) {
  //   var query = this.state.query;
  //   this.setState({userEnteredMovies: this.state.query});
  // }
  
  // handleSubmit(event) {
  // alert(this.state.value);
  // event.preventDefault();
  // }
  //  getMovie(movie) {
  //   this.setState({
  //       currentMovie: event.target.value
  //   });
  // }

  render() {
    return (
      <div> 
        <h1>Movie App </h1>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search onChange={this.handleChange} onClick={this.handleClick}/>
            </div>
          </nav>
        <div> 
          <MovieList movies={this.state.filteredMovies} onClick={this.handleClick} 
          />
        </div>
      </div>
    
    );
  }


}

export default App;