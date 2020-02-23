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

  render() {
    return <div>{/*  form will be added here */}</div>;
  }
}

export default AddMovie;
