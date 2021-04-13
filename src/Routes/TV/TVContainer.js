import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component { 
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loding: true,
    error: null,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday,
      });
    } catch (error) {
      this.setState({ eror: "Can't find TV infomation." });
    } finally {
      this.setState({ loding: false });
    }
  }
  render() {
    const { topRated, popular, airingToday, loding, error } = this.state;
    console.log(this.state)
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loding={loding}
        error={error}
      />
    );
  }
}
