import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Button from "./Button";
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: ''
    };
  }
  componentDidMount() {
    axios
      .get("https://random-data-api.com/api/v2/users")
      .then((response) => {
        this.setState({ card: response.data });
      })
      .catch((error) => {
      });
  }
  render() {
    const { card } = this.state;
    return (
      <div className="card">
        <div className="card__top">
          <img src={card.avatar} alt="" />
        </div>
        <div className="card__bottom">
          <h2>{card.first_name} {card.last_name}</h2>
          <h5>{card.username}</h5>
          <a href="">{card.phone_number}</a>
          <a href="">{card.email}</a>
          <Button/>
        </div>
      </div>
    );
  }
}

export default Card;
