import React, {Component} from "react";


class AddMovie extends React.Component {
  constructor(){
    super();
    this.state = {
      newMovie: {}
    };
  }

handleSubmit(e) {
  if(this.refs.title.value === '') {
    alert('Title is required');
  } else {
    this.setState({newMovie: {
      title: this.refs.title.value
    }},
    function (){
    this.props.AddMovie(this.state.newMovie);
    });
  }
  e.preventDefault();
}

  
  render() {
    return (
      <div> 
         <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div> 
          <input type="submit" value="submit" />
        </form> 
      </div>
    
    );
  }


}

export default AddMovie;