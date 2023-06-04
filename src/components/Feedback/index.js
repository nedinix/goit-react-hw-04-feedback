import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
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

  onLeaveFeedback = e => {
    const stateName = e.currentTarget.name;
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  onCountTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  onCountPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.onCountTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="container">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.onCountTotalFeedback()}
          positivePercentage={this.onCountPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
