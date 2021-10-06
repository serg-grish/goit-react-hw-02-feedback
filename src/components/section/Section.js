import PropTypes from "prop-types";
import "./Section.css";

function Section({ title, children }) {
  return (
    <section className="section">
      {{ title } && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
