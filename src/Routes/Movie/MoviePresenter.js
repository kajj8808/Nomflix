import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helment from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, loding, error }) => (
  <>
    <Helment>
      <title>Movies | Nomflix</title>
    </Helment>
    {loding ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              /* 번역이 너무안되면 original_title */
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                isMovie={true}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {upComing && upComing.length > 0 && (
          <Section title="Upcoming Movies">
            {upComing.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                isMovie={true}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                isMovie={true}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#eb4d4b" />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loding: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
