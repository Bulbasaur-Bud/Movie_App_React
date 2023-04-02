import React, { Component } from "react";

class MovieInfo extends Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.movie.Title}</h1>
        <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
        <h2>Year: {this.props.movie.Year}</h2>
        <h3>Plot: {this.props.movie.Plot}</h3>
      </div>
    );
  }
}

export default MovieInfo;
