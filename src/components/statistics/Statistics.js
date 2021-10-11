import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.Statistics}>
    <li className={styles.Statistics}>good: {good}</li>
    <li className={styles.Statistics}>neutral: {neutral}</li>
    <li className={styles.Statistics}>bad: {bad}</li>
    <li className={styles.Statistics}>total: {total}</li>
    <li className={styles.Statistics}>
      positive feedback: {positivePercentage}%
    </li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
