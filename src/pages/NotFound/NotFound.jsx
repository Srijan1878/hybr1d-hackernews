import React from "react";
import styles from "./NotFound.module.css";
import { ReactComponent as NotFoundVector } from "../../assets/404.svg";

const NotFound = () => {
  return (
    <div className={styles.notFoundContent}>
      <NotFoundVector />
      <h3>Not Found</h3>
    </div>
  );
};

export default NotFound;
