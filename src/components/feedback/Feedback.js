import React from "react";
import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ feedbackState, onAddFeedback }) => (
  <ul className={styles.Feedback}>
    {feedbackState.map((el) => (
      <li key={el} className={styles.item}>
        <button className={styles.btm} onClick={() => onAddFeedback(el)}>
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
