import React, { Component } from "react";
import "./App.css";
import MovieInfo from "./components/MovieInfo";

//http://www.omdbapi.com/?i=tt3896198&apikey=1af8edce
class App extends Component {
  constructor() {
    super();
    this.state = {
      baseURL: " http://www.omdbapi.com/?",
      apikey: "tt3896198&apikey=1af8edce",
      query: "&t=",
      movieTitle: "",
      searchURL: "",
      movie: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.apikey +
          this.state.query +
          this.state.movieTitle,
      },
      () => {
        fetch(this.state.searchURL)
          .then((respond) => {
            return respond.json();
          })
          .then((json) => this.setState({ movie: json, movieTitle: "" }));
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Title</label>
          <input
            type="text"
            id="movieTitle"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type="submit" value="Get Movie Info" />
        </form>
        {this.state.movie ? <MovieInfo movie={this.state.movie} /> : ""}
      </React.Fragment>
    );
  }
}

export default App;
