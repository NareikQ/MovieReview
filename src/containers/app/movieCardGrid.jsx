import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import MovieCard from "../components/movieCard";

const MainDiv = styled.div`
  padding-left: 24px;
  margin: auto;
  width: 1200px;
  .ant-col-6 {
    padding-top: 24px;
    text-align: center;
  }
  .ant-card {
    display: inline-block;
    box-shadow: 4px 7px 7px 3px rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .ant-card-hoverable:hover {
    box-shadow: 7px 8px 8px 4px rgba(0, 0, 0, 0.3),
      0 2px 10px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.7s ease-in-out;
    transform: scale(1.05);
  }
`;
const data = [
  {
    image: "deadpool.jpg",
    title: "Deadpool",
    year: "(2015)"
  },
  {
    image: "2007-transformers.jpg",
    title: "Transformers",
    year: "(2007)"
  },
  {
    image: "BlackPanther.jpg",
    title: "BlackPanther",
    year: "(2017)"
  },
  {
    image: "avengersInfinity.jpg",
    title: "Avengers - Infinity War",
    year: "(2018)"
  },
  {
    image: "deadpool.jpg",
    title: "Deadpool",
    year: "(2015)"
  },
  {
    image: "2007-transformers.jpg",
    title: "Transformers",
    year: "(2007)"
  },
  {
    image: "BlackPanther.jpg",
    title: "BlackPanther",
    year: "(2017)"
  },
  {
    image: "avengersInfinity.jpg",
    title: "Avengers - Infinity War",
    year: "(2018)"
  }
];

class MovieCardGrid extends Component {
  state = { movies: data };

  componentDidMount = () => {
    this.getMovies();
  };

  getMovies = async () => {
    let movies = {};
    let state = this.state;

    fetch("http://localhost:5000/api/movies")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({movies: data});
        console.log('movies', data);
      });
  };

  render() {
    const movies = this.state.movies.map(function(movie, i) {
      i++;

      return (
        <Col span={6}>
          <MovieCard
            image={movie.image}
            title={movie.title}
            year={movie.year}
          />
        </Col>
      );
    });
    return (
      <div>
        <MainDiv>{movies}</MainDiv>
      </div>
    );
  }
}

export default MovieCardGrid;
