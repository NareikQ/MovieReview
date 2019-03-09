import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import MovieCard from "../components/movieCard";

const mainDiv = styled.div`
  padding: 24px;
  .ant-col-6 {
      padding-top: 24px;
  }
`;
const data = [
  {
    image: "deadpool.jpg",
    title: "Deadpool",
    description: "(2015)"
  },
  {
    image: "2007-transformers.jpg",
    title: "Transformers",
    description: "(2007)"
  },
  {
    image: "BlackPanther.jpg",
    title: "BlackPanther",
    description: "(2017)"
  },
  {
    image: "avengersInfinity.jpg",
    title: "Avengers - Infinity War",
    description: "(2018)"
  },
  {
    image: "deadpool.jpg",
    title: "Deadpool",
    description: "(2015)"
  },
  {
    image: "2007-transformers.jpg",
    title: "Transformers",
    description: "(2007)"
  },
  {
    image: "BlackPanther.jpg",
    title: "BlackPanther",
    description: "(2017)"
  },
  {
    image: "avengersInfinity.jpg",
    title: "Avengers - Infinity War",
    description: "(2018)"
  }
];

class MovieCardGrid extends Component {
  state = {};

  render() {
    const movies = data.map(function(movie, i) {
      i++;

        return (
          <Col span={6}>
            <MovieCard
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          </Col>
        );
    });
    return (
      <mainDiv>
        <Row gutter={0}>{movies}</Row>
      </mainDiv>
    );
  }
}

export default MovieCardGrid;
