import React, { Component } from "react";
import "./App.css";
import Section from "./components/section/Section";
import Feedback from "./components/feedback";
import Statistics from "./components/statistics";
import Notification from "./components/notification";
import { feedbackState } from "./data/feedBackState";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = (el) => {
    this.setState((prevState) => ({
      [el]: prevState[el] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            feedbackState={feedbackState}
            onAddFeedback={this.onAddFeedback}
          ></Feedback>
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
