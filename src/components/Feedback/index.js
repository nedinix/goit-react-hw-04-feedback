import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics/Statistics';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    state: PropTypes.arrayOf(
      PropTypes.exact({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
      })
    ),
  };

  onCountStateGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.onCountTotalFeedback();
  };

  onCountStateNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.onCountTotalFeedback();
  };

  onCountStateBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.onCountTotalFeedback();
  };

  onCountTotalFeedback = () => {
    this.setState(prevState => {
      const { good, neutral, bad } = prevState;
      return {
        total: Object.values({ good, neutral, bad }).reduce(
          (acc, value) => acc + value,
          0
        ),
      };
    });
    this.onCountPositiveFeedbackPercentage();
  };

  onCountPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.state.total) * 100);

  render() {
    return (
      <div className="container">
        <FeedbackOptions
          stateGood={this.onCountStateGood}
          stateNeutral={this.onCountStateNeutral}
          stateBad={this.onCountStateBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </div>
    );
  }
}
