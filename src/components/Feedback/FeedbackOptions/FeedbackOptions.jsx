import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateKeys = Object.keys(options);
  return (
    <div className={css.feedback_options}>
      <h3>Please leave Feedback</h3>
      <div className={css.feedback_options_list}>
        {stateKeys.map((option, index) => (
          <button
            key={index}
            className={css[option]}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
