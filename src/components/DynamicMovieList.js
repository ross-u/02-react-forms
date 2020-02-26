// src/components/DynamicMovieList.js
import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";
import AddMovie from "./AddMovie";

class DynamicMovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray, // :( anti-pattern
      showMovies: true
    };
  }

  addNewMovie = newMovieObj => {
    const moviesCopy = [...this.state.movies];

    moviesCopy.unshift(newMovieObj);

    this.setState({ movies: moviesCopy });
  };

  toggleMovies = () => {
    this.setState({ showMovies: !this.state.showMovies });
  };

  deleteMovie = id => {
    const moviesCopy = this.state.movies.filter(oneMovie => oneMovie.id !== id);
    this.setState({ movies: moviesCopy });
  };

  render() {
    return (
      <div>
        <AddMovie addMovie={this.addNewMovie} secretCode="123abc" />
        {/*  this.props.addMovie          this.props.secretCode      */}

        <button onClick={this.toggleMovies}>Toggle Movies</button>

        <ul>
          {this.state.showMovies
            ? this.state.movies.map(oneMovie => {
                return (
                  <ImprovedCard
                    key={oneMovie.id}
                    {...oneMovie}
                    clickToDelete={() => this.deleteMovie(oneMovie.id)}
                  />
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default DynamicMovieList;
