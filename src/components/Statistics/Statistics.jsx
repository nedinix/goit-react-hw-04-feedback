import React from 'react';
import NotificationMessage from '../NotificationMessage';
// import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import {
  StyledStatisticsList,
  StyledGoodStat,
  StyledNeutralStat,
  StyledBadStat,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h3>Statistics</h3>
    {total ? (
      <StyledStatisticsList>
        <li>
          <StyledGoodStat>Good: {good}</StyledGoodStat>
        </li>
        <li>
          <StyledNeutralStat>Neutral: {neutral}</StyledNeutralStat>
        </li>
        <li>
          <StyledBadStat>Bad: {bad}</StyledBadStat>
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
