import React, { useState } from "react";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import throttle from "../../utils/throttle";
import PropTypes from "prop-types";

const scrollThreshold = 250;

const List = ({
  data,
  noDataText = "No Data",
  scrollableListHeight,
  renderListItem,
  renderListHeader,
  loading,
  infiniteScroll = false,
  windowSize,
  expandBy = 10,
  ...rest
}) => {
  const [currentWindow, setCurrentWindow] = useState(windowSize);

  function checkScrollPosition(e) {
    if (!infiniteScroll || currentWindow >= data.length) return;
    const remainingScrollHeight =
      e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight);
    if (remainingScrollHeight < scrollThreshold) expandWindowSize();
  }

  function expandWindowSize() {
    setCurrentWindow((prev) => prev + expandBy);
  }

  if (!loading && !data) return <></>;
  if (loading) return <Loader />;
  if(!data.length) return <h3 className={styles.noData}>{noDataText}</h3>


  const getRange = () => {
    if (currentWindow === undefined) return data.length;
    else return currentWindow;
  };

  return (
    <div className={styles.listContainer} {...rest}>
      {renderListHeader}
      <div
        style={{ maxHeight: scrollableListHeight }}
        className={styles.scrollableListWrapper}
        onScroll={throttle(checkScrollPosition, 300)}
      >
        {data.slice(0, getRange()).map((item) => renderListItem(item))}
      </div>
    </div>
  );
};

//List Item Component
List.Item = ({ children, itemData }) => {
  const toPath = itemData.objectID;
  return (
    <div className={styles.listItem}>
      <Link to={toPath} state={{ data: itemData }}>
        <p>{children}</p>
      </Link>
    </div>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array,
  scrollableListHeight: PropTypes.string,
  renderListItem: PropTypes.func.isRequired,
  renderListHeader: PropTypes.element,
  loading: PropTypes.bool,
  infiniteScroll: PropTypes.bool,
  windowSize: PropTypes.number,
  expandBy: PropTypes.number,
  noDataText: PropTypes.string,
};

List.Item.propTypes = {
  children: PropTypes.string.isRequired,
  itemData: PropTypes.object.isRequired,
};
