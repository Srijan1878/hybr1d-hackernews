import React from "react";
import { useLocation } from "react-router-dom";
import NestedWidget from "./components/CommentWidget/NestedWidget";
import Text from "../../components/Text/Text";
import useApi from "../../customHooks/useApi";
import formatDate from "../../utils/formatDate";
import styles from "./Details.module.css";

const Details = () => {
  const { pathname, state } = useLocation();

  const emptyState = state === null || state === undefined;

  const [, apiState] = useApi({
    path: `/items${pathname}`,
    runOnMount: true,
  });

  const getDataSource = () => {
    if (emptyState) {
      if (apiState.data) return apiState.data;
      return {};
    }
    return state.data;
  };

  return (
    <>
      <div className={styles.postDetailsHeader}>
        <Text label={"title"}>{getDataSource().title}</Text>
        <Text label={"Points"}>{getDataSource().points}</Text>
        <Text label={"Author"}>{getDataSource().author}</Text>
        <Text label={"Created on"}>
          {formatDate(getDataSource().created_at)}
        </Text>
      </div>
      <NestedWidget data={apiState.data.children} loading={apiState.loading} />
    </>
  );
};

export default Details;
