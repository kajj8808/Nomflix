import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      loding: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id); /* string => NaN */
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));        
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
        const {
          data: { imdb_id },
        } = await tvApi.externalIds(parsedId);
        result["imdb_id"] = imdb_id;
      }
    } catch (error) {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loding: false, result });
    }
  }

  render() {
    const { result, loding, error , isMovie} = this.state;
    return <DetailPresenter result={result} loding={loding} error={error} isMovie={isMovie} />;
  }
}
