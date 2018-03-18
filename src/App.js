import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Place from './components/place';
class App extends Component {
  render() {
    const place = {
      "name": "Hub",
      "price": "700",
      "imageUrl": "https://www.pub-hub.com/images/shop/main/5576.jpg"
    };
    return (
      <div>
        <Place place={place} />
      </div>
    );
  }
}

export default App;
