import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon } from "antd";

const { Meta } = Card;

class MovieCard extends Component {
  state = {};
  settingsClick = () => {
    
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
