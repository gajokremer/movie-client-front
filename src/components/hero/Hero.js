import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-material-ui-carousel";
import { Link, useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  const reviews = (movieId) => {
    navigate(`/Reviews/${movieId}`);
  };

  const randomNumber = (max) => {
    // random number between 0 and max
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{
                    // backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1)), url("${movie.backdrops[0]}")`,
                    backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1)), url("${movie.backdrops[randomNumber(movie.backdrops.length)]}")`,
                  }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster}></img>
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                      {/* <p>{movie.description}</p> */}
                    </div>
                    <div className="movie-buttons-container">
                      <Link
                        to={`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            className="play-button-icon"
                            icon={faCirclePlay}
                          ></FontAwesomeIcon>
                        </div>
                      </Link>

                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => reviews(movie.imdbId)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
