import React from 'react';
import './App.css';
import FactCard from './FactCard';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      facts: "0 is the number of times you clicked on a new fact button.",
      prevFact: ""
    }
  }

  async getFact(factType="year") {
      const oldFact = this.state.facts;
      const resp = await fetch(`http://numbersapi.com/random/${factType}`);
      const data = await resp.text();
      this.setState({facts: data, prevFact: oldFact});
      console.log(oldFact);
  }

  componentDidMount () {
    this.getFact();
  }

  clickNewFact = (event, factType="trivia") => {
    switch (event.target.textContent) {
      case "Year Fact":
        this.getFact("year");
        break;
      case "Trivia Fact":
        this.getFact("trivia");
        break;
      case "Date Fact":
        this.getFact("date");
        break;
      case "Previous Fact":
        this.setState({facts: this.state.prevFact});
        break;
      default:
        this.getFact();
    }
  }

  render() {
    const { facts } = this.state;
    return(
      <div className="factCard">
        <FactCard fact={ facts } newFact={ this.clickNewFact } />
      </div>
    )
  }
}

export default App;
