import React, { Component } from "react";
import styled from "styled-components";
import { Layout, Menu, Icon } from "antd";
const { Header } = Layout;

class TopNav extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" /> MOVIE REVIEW
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default TopNav;
