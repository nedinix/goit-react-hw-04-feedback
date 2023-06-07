import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { Container } from './App.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  onCountTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  onCountPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.onCountTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Container>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.onCountTotalFeedback()}
          positivePercentage={this.onCountPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}

export default App;
