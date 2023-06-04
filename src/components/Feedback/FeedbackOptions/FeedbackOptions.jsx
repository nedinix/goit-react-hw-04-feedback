import React from 'react';
import css from './FeedbackOptions.module.css';

// const FeedbackOptions = ({ stateGood, stateNeutral, stateBad }) => (
//   <div className={css.feedback_options}>
//     <h3>Please leave Feedback</h3>
//     <div className={css.feedback_options_list}>
//       <button className={css.good} type="button" onClick={stateGood}>
//         Good
//       </button>
//       <button className={css.neutral} type="button" onClick={stateNeutral}>
//         Neutral
//       </button>
//       <button className={css.bad} type="button" onClick={stateBad}>
//         Bad
//       </button>
//     </div>
//   </div>
// );

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateKeys = Object.keys(options);
  return (
    <div className={css.feedback_options}>
      <h3>Please leave Feedback</h3>
      <div className={css.feedback_options_list}>
        {
          stateKeys.map(option => (
            <button
              className={css[option]}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          ))
          // <button
          //   // className={css.good}
          //   type="button"
          //   onClick={onLeaveFeedback}
          // >
          //   {good}
          // </button>
          //       <button className={css.neutral} type="button" onClick={stateNeutral}>
          //         Neutral
          //       </button>
          //       <button className={css.bad} type="button" onClick={stateBad}>
          //         Bad
          //       </button>
        }
      </div>
    </div>
  );
};

export default FeedbackOptions;
