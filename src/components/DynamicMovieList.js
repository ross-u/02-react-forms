// src/components/DynamicMovieList.js
import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";
import AddMovie from "./AddMovie";

class DynamicMovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray,
      showMovies: true
    };
  }

  toggleMovies = () => {
    this.setState({ showMovies: !this.state.showMovies });
  };

  deleteMovie = id => {
    const moviesCopy = this.state.movies.filter(oneMovie => oneMovie.id !== id);
    this.setState({ movies: moviesCopy });
  };

  addNewMovie = newMovie => {
    const moviesCopy = [...this.state.movies];
    this.state.movies.push(newMovie);

    this.setState({ movies: this.state.movies });
  };

  render() {
    return (
      <div>
        <AddMovie addTheMovie={this.addNewMovie} />

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
