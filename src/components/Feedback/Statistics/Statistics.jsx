import React from 'react';
import NotificationMessage from 'components/Feedback/NotificationMessage/NotificationMessage';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statistics}>
    <h3>Statistics</h3>
    {!total ? (
      <NotificationMessage message={'There is no feedback'} />
    ) : (
      <ul>
        <li>
          <span className={css.statistics_item_good}>Good: {good}</span>
        </li>
        <li>
          <span className={css.statistics_item_neutral}>
            Neutral: {neutral}
          </span>
        </li>
        <li>
          <span className={css.statistics_item_bad}>Bad: {bad}</span>
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
