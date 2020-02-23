// src/components/AddMovie.js

import React, { Component } from "react";

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    // call funtion from DynamicMovieList

    const newMovieObj = this.state;
    this.props.addTheMovie(newMovieObj);

    // Reset State
    this.setState({
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating: ""
    });
  };

  handleTitleInput = e => {
    const { value, name } = e.target;
    console.log("\n INPUT NAME", name);
    console.log("INPUT VALUE", value);

    this.setState({ title: value });
    // this.setState({ [name]: value });
  };

  handleDirectorInput = e => {
    const { value, name } = e.target;
    console.log("\n INPUT NAME", name);
    console.log("INPUT VALUE", value);

    this.setState({ director: value });
    // this.setState({ [name]: value });
  };

  handleOscarsCheckInput = e => {
    const { name, checked } = e.target;
    console.log("\n INPUT NAME", name);
    console.log("CHECKED ", checked);

    this.setState({ hasOscars: checked });
    // this.setState({ [name]: checked });
  };

  handleRatingInput = e => {
    const { name, value } = e.target;
    console.log("\n INPUT NAME", name);
    console.log("INPUT VALUE", value);

    this.setState({ IMDbRating: value });
    // this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title: </label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleInput}
          />

          <label>Director: </label>
          <input
            name="director"
            type="text"
            value={this.state.director}
            onChange={this.handleDirectorInput}
          />

          <label>Oscar Awarded: </label>
          <input
            name="hasOscars"
            type="checkbox"
            checked={this.state.hasOscars}
            onChange={this.handleOscarsCheckInput}
          />

          <label>IMDb Rating: </label>
          <input
            name="IMDbRating"
            type="text"
            value={this.state.IMDbRating}
            onChange={this.handleRatingInput}
          />

          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
