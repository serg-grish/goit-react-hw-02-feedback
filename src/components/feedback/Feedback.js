import React from "react";
import "./Feedback.css";
import PropTypes from "prop-types";

const Feedback = ({ feedbackState, onAddFeedback }) => (
  <ul className="Feedback">
    {feedbackState.map((el) => (
      <li key={el} className="Feedback__item">
        <button className="Feedback__btm" onClick={() => onAddFeedback(el)}>
          {el}
        </button>
      </li>
    ))}
  </ul>
);

export default Feedback;

Feedback.propTypes = {
  feedbackState: PropTypes.string.isRequired,
  onAddFeedback: PropTypes.func.isRequired,
};
