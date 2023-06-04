import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ stateGood, stateNeutral, stateBad }) => (
  <div className={css.feedback_options}>
    <h3>Please leave Feedback</h3>
    <div className={css.feedback_options_list}>
      <button className={css.button_good} type="button" onClick={stateGood}>
        Good
      </button>
      <button
        className={css.button_neutral}
        type="button"
        onClick={stateNeutral}
      >
        Neutral
      </button>
      <button className={css.button_bad} type="button" onClick={stateBad}>
        Bad
      </button>
    </div>
  </div>
);

export default FeedbackOptions;
