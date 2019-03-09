import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon } from "antd";

const { Meta } = Card;

class MovieCard extends Component {
  state = {};
  settingsClick = () => {
    alert("Settings Clicked");
  };
  editClick = () => {
    alert("Edit Clicked");
  };
  moreClick = () => {
    alert("More Clicked");
  };
  render() {
    return (
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
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
        <Meta title="Card title" description="This is the description" />
      </Card>
    );
  }
}

export default MovieCard;
