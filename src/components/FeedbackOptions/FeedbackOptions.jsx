import React from 'react';

const FeedbackOptions = ({ stateGood, stateNeutral, stateBad }) => (
  <div>
    <h3>Please leave Feedback</h3>
    <button type="button" onClick={stateGood}>
      Good
    </button>
    <button type="button" onClick={stateNeutral}>
      Neutral
    </button>
    <button type="button" onClick={stateBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
