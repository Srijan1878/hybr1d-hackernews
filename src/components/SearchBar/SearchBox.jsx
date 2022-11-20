import React from "react";
import { ReactComponent as SearchLogo } from "../../assets/search-logo.svg";
import { THROTTLE_INTERVAL } from "../../constants/events";
import throttle from "../../utils/throttle";
import styles from "./SearchBox.module.css";

const SearchBox = ({ onSearch, shouldThrottle = false, ...props }) => {

  let onSearchEvent = onSearch
  if(shouldThrottle) onSearchEvent = throttle(onSearch, THROTTLE_INTERVAL) 

  const keyPressHandler = (event) => {
    if (event.key !== "Enter") return;
    onSearchEvent();
  };

  return (
    <div className={styles.searchBoxWrapper}>
      <input
        className={styles.searchBox}
        onKeyDown={keyPressHandler}
        {...props}
      />
      <SearchLogo
        onClick={onSearchEvent}
      />
    </div>
  );
};

export default SearchBox;
