import React from "react";
import styles from "./Text.module.css";
import propTypes from "prop-types";

const Text = ({ children, label, ...rest }) => {
  return (
    <h3 className={styles.textWrapper} {...rest}>
      <span className={styles.textLabel}>{label}:</span>
      {children}
    </h3>
  );
};

export default Text;

Text.propTypes = {
  children: propTypes.node,
  label: propTypes.string,
}
