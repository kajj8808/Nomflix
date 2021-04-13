import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helment from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px 20px;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  updateTerm,
  handleSubmit,
  loding,
  error,
}) => (
  <Container>
    <Helment>
      <title>Search | Nomflix</title>
    </Helment>
    <Form onSubmit={handleSubmit}>
      {/* value 는 Container 에서 searchTerm 을 연결? 해서 값을 왓다갓다 하기 위해 사용. */}
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loding ? (
      <Loader />
    ) : (
      <>
        {/* if  movieResults true 라면 movieResult 는 length 를 갖고 그리고 Section ...*/}
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
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
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
          <Message text="Nothing found for" />
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loding: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
