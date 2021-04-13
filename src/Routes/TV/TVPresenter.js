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

const TVPresenter = ({ topRated, popular, airingToday, loding, error }) => (
  <>
    <Helment>
      <title>TVShow | Nomflix</title>
    </Helment>
    {loding ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Show">
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Show">
            {popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#eb4d4b" />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loding: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
