import React, { useState } from "react";
import htmlToString from "../../../../utils/convertHTML";
import List from "../../../../components/List/List";
import styles from "./NestedWidget.module.css";
import { getNestedChildrenCount } from "./utils";

const WidgetItem = ({ data }) => {
  const [showNestedItem, setShowNestedItem] = useState(false);

  if (!data) return <></>;
  const hasChildren = data.children && data.children.length;

  return (
    <>
      <div className={styles.commentWrapper}>
        <p className={styles.author}>{data.author}</p>
        <p>{htmlToString(data.text)}</p>
        <button
          className={styles.button}
          onClick={() => setShowNestedItem(!showNestedItem)}
          disabled={!hasChildren}
        >
          {getNestedChildrenCount({
            childrenCount: hasChildren && data.children.length,
            showNestedItem,
          })}
        </button>
      </div>
      {hasChildren && showNestedItem ? (
        <div className={styles.nestedContentWrapper}>
          {data.children.map((currData) => (
            <WidgetItem data={currData} key={currData.id} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const NestedWidget = (props) => (
  <List
    windowSize={30}
    infiniteScroll={true}
    expandBy={10}
    noDataText={"No comments found for this post"}
    renderListHeader={<h2>Comments</h2>}
    renderListItem={(item) => <WidgetItem data={item} key={item.id} />}
    {...props}
  />
);

export default NestedWidget;
