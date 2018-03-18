import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Place from './components/place';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }
  render() {
    const place = {
      "name": "Hub",
      "price": "700",
      "imageUrl": "https://www.pub-hub.com/images/shop/main/5576.jpg"
    };
    const places = [place, place, place];
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="places">
            {places.map((place) => {
              return <Place place={place} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
