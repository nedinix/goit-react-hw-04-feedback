import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFeedbackButton,
  StyledFeedbackOptionsList,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h3>Please leave Feedback</h3>
      <StyledFeedbackOptionsList>
        {options.map(option => (
          <StyledFeedbackButton
            key={option}
            colorState={option}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </StyledFeedbackButton>
        ))}
      </StyledFeedbackOptionsList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
