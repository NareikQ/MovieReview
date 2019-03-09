import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu, Icon } from "antd";
import MovieCardGrid from "./containers/app/movieCardGrid";
import TopNav from "../src/containers/app/topNav";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header><TopNav /></Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <MovieCardGrid />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;
