import React from "react";

export default class History extends React.Component {
  render() {
    return (
      <div className="component-history">
        <h2>Calculation History</h2>
        <ul>
          {this.props.history.map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
      </div>
    );
  }
}
