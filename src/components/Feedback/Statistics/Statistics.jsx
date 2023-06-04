import React from 'react';
import NotificationMessage from 'components/Feedback/NotificationMessage/NotificationMessage';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statistics}>
    <h3>Statistics</h3>
    {total ? (
      <ul>
        <li>
          <span className={css.good}>Good: {good}</span>
        </li>
        <li>
          <span className={css.neutral}>Neutral: {neutral}</span>
        </li>
        <li>
          <span className={css.bad}>Bad: {bad}</span>
        </li>

        <li>
          <span>Total: {total}</span>
        </li>

        <li>
          <span>Positive feedback: {`${positivePercentage}%`}</span>
        </li>
      </ul>
    ) : (
      <NotificationMessage message={'There is no feedback'} />
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
