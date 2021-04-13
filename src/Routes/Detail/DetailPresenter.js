import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helment from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
  /* viewport height 100%   screen 의 height - header height*/
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: scroll;
`;

const Cover = styled.div`
  position: fixed;
  width: 30%;
  height: 90%;
  background-color: #ecf0f1;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  position: relative;
  left: 30%;
  width: 69%;
  margin-left: 30px;
`;

const Title = styled.span`
  font-size: 32px;
`;

const ItemTitle = styled.span`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  white-space: nowrap;
  display: flex;
  width: 80%;
  align-items: center;
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  position: relative;
  top: -10px;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 95%;
  margin-bottom: 20px;
`;

const ImdbIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.bgUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;

const ImdbLink = styled.a`
  box-sizing: content-box;
  width: 24px;
  height: 24px;
  display: inline-block;
`;

const CompanieContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  padding: 10px 20px;
  align-content: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(20, minmax(min-content, 80px));
  grid-template-rows: 50px;
  grid-gap: 20px;
  margin: 20px 0;
  width: 95%;
  height: 70px;
  overflow: scroll;
`;
const CompanieIogo = styled.div`
  display: inline-block;
  width: 100px;
  height: 50px;
  margin-right: 20px;
  background-image: url(${(props) => props.bgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
const CompanieText = styled.p`
  display: inline-block;
  height: 50px;
  position: relative;
  top: 15px;
  font-size: 8px;
  margin: 0px 10px;
`;

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 30%));
  grid-gap: 10px;
  margin-bottom: 20px;
`;
const YoutubeVideo = styled.iframe`
  border-radius: 5px;
  background-color: #ecf0f1;
  width: 100%;
  margin-top: 10px;
  height: 315;
`;

const SeasonsContainer = styled.div`
  padding: 10px 0px;
  align-content: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(20, minmax(min-content, 80px));
  grid-template-rows: 430px;
  grid-gap: 5px;
  width: 95%;
  height: 440px;
  overflow: scroll;
  margin-bottom: 30px;
`;
const SeasonsPoster = styled.div`
  display: inline-block;
  width: 300px;
  height: 430px;
  margin-right: 5px;
  position: relative;
  background-color: #ecf0f1;
  background-image: url(${(props) => props.bgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 6px;
  z-index: 1;
`;

const DetailPresenter = ({ result, loding, error, isMovie }) =>
  loding ? (
    <>
      <Helment>
        <title>Loading | Nomflix</title>
      </Helment>
      <Loader />
    </>
  ) : (
    <Container>
      <Helment>
        <title>
          {result.original_title ? result.original_title : result.original_name} | Nomflix
        </title>
      </Helment>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterBig.png").default
          }
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
            <Divider>•</Divider>
            <ImdbLink href={`https://www.imdb.com/title/${result.imdb_id}`}>
              <ImdbIcon bgUrl={require("../../assets/imdb_icon.png").default} />
            </ImdbLink>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1 ? genre.name : `${genre.name}/`
                )}
            </Item>
            <Divider>•</Divider>
            <Item> {result.production_countries.map((product) => product.name)} </Item>
          </ItemContainer>
          <CompanieContainer>
            {result.production_companies.map((companie) => (
              <>
                {companie.logo_path !== null ? (
                  <CompanieIogo
                    key={companie.id}
                    bgUrl={`https://image.tmdb.org/t/p/original/${companie.logo_path}`}
                  />
                ) : (
                  <CompanieText>{companie.name}</CompanieText>
                )}
              </>
            ))}
          </CompanieContainer>
          <Overview>{result.overview} </Overview>
          {result.videos.results[0] === undefined ? null : <ItemTitle>Videos</ItemTitle>}
          <VideosContainer>
            {result.videos.results.map((video, index) => (
              <YoutubeVideo
                key={video.id}
                src={`https://www.youtube.com/embed/${video.key}`}
                allowFullScreen="true"
              />
            ))}
          </VideosContainer>
          {isMovie ? null : (
            <>
              <ItemTitle>Seasons</ItemTitle>
              <SeasonsContainer>
                {result.seasons.map((season, index) => (
                  <>
                    {season.poster_path ? (
                      <SeasonsPoster
                        key={season.id}
                        bgUrl={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                      />
                    ) : (
                      <SeasonsPoster bgUrl={require("../../assets/noPosterBig.png").default} />
                    )}
                  </>
                ))}
              </SeasonsContainer>
            </>
          )}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loding: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
