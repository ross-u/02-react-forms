import React, { Component } from "react";
import shortid from "shortid";

class AddMovie extends Component {
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: ""
  };

  handleChange = e => {
    // hasOscars = true

    // e.target is the input element that triggers the onChange event
    let { value, name, type } = e.target;

    if (type === "checkbox" && this.state[name] === false) {
      value = true;
    } else if (type === "checkbox" && this.state[name] === true) {
      value = false;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Save the movie in the list

    const newMovie = this.state;
    newMovie.id = shortid.generate();

    // Saves the movie in the DynamicMovieList `state` via the borrowed function
    this.props.addMovie(newMovie);

    // Reset the state to clear the form
    this.setState({
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label>director</label>
          <input
            type="text"
            name="director"
            value={this.state.director}
            onChange={this.handleChange}
          />

          <label>Oscars Awarded</label>
          <input
            type="checkbox"
            name="hasOscars"
            checked={this.state.hasOscars}
            onChange={this.handleChange}
          />

          <label>IMDB Rating</label>
          <input
            type="number"
            name="IMDbRating"
            value={this.state.IMDbRating}
            onChange={this.handleChange}
            min={1}
            max={10}
          />

          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
