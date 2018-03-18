import React from "react";
import "./place.css";

class Place extends React.Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.place.imageUrl}')`
    };

    const title = this.props.place.name + " - " + this.props.place.price;

    return (
      <div className="place">
        <div className="place-picture" style={style}></div>
        <div className="place-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Place;
