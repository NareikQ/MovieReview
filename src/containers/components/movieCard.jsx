import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon } from "antd";

const { Meta } = Card;

class MovieCard extends Component {
  state = {};
  settingsClick = () => {
    fetch(
      "http://localhost:9000/documents/websites/moviereview/server/test.php"
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Bad response");
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.log('Error: ', error));
  };
  editClick = () => {
    alert("Edit Clicked");
  };
  moreClick = () => {
    alert("More Clicked");
  };
  render() {
    const { image, title, description } = this.props;
    return (
      <Card
        hoverable
        style={{ width: 250 }}
        cover={<img alt="example" src={"images/posters/" + image} />}
        actions={[
          <a onClick={this.like}>
            <Icon type="like" />
          </a>,
          <a onClick={this.settingsClick}>
            <Icon type="setting" />
          </a>,
          <a onClick={this.editClick}>
            <Icon type="edit" />
          </a>,
          <a onClick={this.moreClick}>
            <Icon type="ellipsis" />
          </a>
        ]}
      >
        <Meta title={title} description={description} />
      </Card>
    );
  }
}

export default MovieCard;
