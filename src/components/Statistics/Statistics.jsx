import React from 'react';
import NotificationMessage from '../NotificationMessage';
import PropTypes from 'prop-types';
import { StyledStatisticsList, StyledStatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h3>Statistics</h3>
    {total ? (
      <StyledStatisticsList>
        <li>
          <StyledStatItem colorState={'good'}>Good: {good}</StyledStatItem>
        </li>
        <li>
          <StyledStatItem colorState={'neutral'}>
            Neutral: {neutral}
          </StyledStatItem>
        </li>
        <li>
          <StyledStatItem colorState={'bad'}>Bad: {bad}</StyledStatItem>
        </li>

        <li>
          <span>Total: {total}</span>
        </li>

        <li>
          <span>Positive feedback: {`${positivePercentage}%`}</span>
        </li>
      </StyledStatisticsList>
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
