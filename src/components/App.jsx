import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { Container } from './App.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / total) * 100);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveFeedbackPercentage}
      />
    </Container>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
