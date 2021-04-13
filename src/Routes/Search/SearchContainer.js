import React from "react";
import SearchPresenter from "./SearchPrecenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loding: false,
    error: null,
  };

  handleSubmit = (event) => {
    /* 새로고침 안되게.. */
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };
  /* change event  */
  updateTerm = (event) => {
    const {
      target: { value: searchTerm },
    } = event;
    this.setState({
      searchTerm
    });
  };

  searchByTerm = async (term) => {
    const { searchTerm } = this.state;
    this.setState({ loding: true });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
    } catch (error) {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loding: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loding, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loding={loding}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
