import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon, message } from "antd";

const { Meta } = Card;

class MovieCard extends Component {
  state = {
    id: ""
  };
  componentDidMount = () => {
    const { image, title, year, id } = this.props;
    this.setState({ id: id });
  };

  componentDidUpdate = prevProps => {
    if (this.props !== prevProps) {
      console.log("Updated: ", this.props);
      this.setState({ id: this.props.id });
    }
  };
  like = () => {
    const { id } = this.state;
    // fetch("http://localhost:5000/api/likes/" + id, {})
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(data => {
    //     message.destroy();
    //     message.success('Liked!!');
    //   }).catch(err => {
    //     message.destroy();
    //     message.error('Something went wrong: ' + err);
    //   });
  };
  settingsClick = () => {};
  cardClick = () => {
    const { id } = this.state;
    message.loading("Getting data...");
    fetch("http://localhost:5000/api/movies/" + id)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        message.destroy();
        message.success("Success!");
      })
      .catch(err => {
        message.destroy();
        message.error("Something went wrong: " + err);
      });
  };
  editClick = () => {
    alert("Edit Clicked");
  };
  moreClick = () => {
    alert("More Clicked");
  };
  render() {
    const { image, title, year, id } = this.props;
    let updatedImage = image ? image : "placeholder.jpg";
    return (
      <Card
        hoverable
        style={{ width: 250 }}
        cover={<img alt="example" src={"images/posters/" + updatedImage} />}
        onClick={this.cardClick}
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
        <Meta title={title} description={year} />
      </Card>
    );
  }
}

export default MovieCard;
