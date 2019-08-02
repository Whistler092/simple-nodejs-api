import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Cards extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    const endpoint = "http://localhost:8000/";
    const socket = socketIOClient(endpoint);

    socket.on("InitData", data => {
      console.log("data", data);
      this.setState({
        cards: data
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Cartas de Oliver</h1>
        {this.state.cards.map(card => (
          <li key={card._id}>{card.title}</li>
        ))}
      </div>
    );
  }
}

export default Cards;
