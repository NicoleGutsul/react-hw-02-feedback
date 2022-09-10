import { Component } from "react";
import Controls from "./Controls/Controls";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  addFeedback = fb => {
    this.setState(prevState => ({
      [fb] : prevState[fb] + 1,
    }));
  };

  render() {
    return (
      <>
         <Controls 
            addFeedback={this.addFeedback}
            options={['good', 'neutral', 'bad']}
         />
      </>
    )
  }
}