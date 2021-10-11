import React from "react";
import "./Statistics.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="Statistics">
    <li className="Statistics">good: {good}</li>
    <li className="Statistics">neutral: {neutral}</li>
    <li className="Statistics">bad: {bad}</li>
    <li className="Statistics">total: {total}</li>
    <li className="Statistics">positive feedback: {positivePercentage}%</li>
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
