import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import MovieCard from "../components/movieCard";

const mainDiv = styled.div`
  padding: 24px;
`;

class MovieCardGrid extends Component {
  state = {};

  render() {
    return (
      <mainDiv>
        <Row gutter={0}>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
        </Row>
        <br />
        <Row gutter={0}>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
          <Col span={6}>
            <MovieCard
              image="deadpool.jpg"
              title="Deadpool"
              description="(2016)"
            />
          </Col>
        </Row>
      </mainDiv>
    );
  }
}

export default MovieCardGrid;
