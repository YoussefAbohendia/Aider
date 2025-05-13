import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import History from "./History";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    history: [],
    darkMode: false,
  };

  handleClick = buttonName => {
    if (buttonName === "=") {
      const result = calculate(this.state, buttonName);
      const expression = `${this.state.total} ${this.state.operation} ${this.state.next} = ${result.total}`;
      this.setState({
        total: result.total,
        next: result.next,
        operation: result.operation,
        history: [...this.state.history, expression],
      });
    } else {
      this.setState(calculate(this.state, buttonName));
    }
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const appClass = `component-app ${this.state.darkMode ? "dark-mode" : ""}`;

    return (
      <div className={appClass}>
        <button className="dark-mode-toggle" onClick={this.toggleDarkMode}>
          Toggle Dark Mode
        </button>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
        <History history={this.state.history} />
      </div>
    );
  }
}
