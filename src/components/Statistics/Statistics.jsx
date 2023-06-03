import React from 'react';
import NotificationMessage from 'components/NotificationMessage/NotificationMessage';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h3>Statistics</h3>
    {!total ? (
      <NotificationMessage message={'There is no feedback'} />
    ) : (
      <ul>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>

        {total && (
          <li>
            <span>Total: {total}</span>
          </li>
        )}
        {positivePercentage && (
          <li>
            <span>Positive feedback: {positivePercentage}</span>
          </li>
        )}
      </ul>
    )}
  </div>
);

export default Statistics;
