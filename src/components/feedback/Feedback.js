import React from "react";
import "./Feedback.css";

const Feedback = ({ feedbackState, onAddFeedback }) => (
  <ul className="Feedback">
    {feedbackState.map((el) => (
      <li key={el} className="Feedback__item">
        <button onClick={() => onAddFeedback(el)}>{el}</button>
      </li>
    ))}
  </ul>
);

export default Feedback;
