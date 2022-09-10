import { Component } from "react";
import Controls from "./Controls/Controls";
import Statistics from "./Statistics/Statistics";

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

  countTotalFeedback = ({ good, neutral, bad } = this.state) => 
    Number(good) + Number(neutral) + Number(bad);
  countPositiveFeedbackPercentage = ({ good } = this.state) =>
    Math.round((good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
         <Controls 
            addFeedback={this.addFeedback}
            options={['good', 'neutral', 'bad']}
         />
         <Statistics
            title={'Statistics'}
            state={this.state}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
         />
      </>
    )
  }
}