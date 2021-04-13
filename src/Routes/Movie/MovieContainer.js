import React from "react";
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "api";
//Container Component !!
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loding: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upComing },
      } = await moviesApi.upComing();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch (error) {
      this.setState({
        error: "Can't find movies infomation.",
      });
    } finally {
      this.setState({
        loding: false,
      });
    }
  }

  render() {
    //obeject destructuring
    const { nowPlaying, upComing, popular, error, loding } = this.state;
    return (
      <MoviePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loding={loding}
      />
    );
  }
}
