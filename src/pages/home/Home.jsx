import React, { useRef, useState } from "react";
import List from "../../components/List/List";
import SearchBox from "../../components/SearchBar/SearchBox";
import useApi from "../../customHooks/useApi";
import styles from "./Home.module.css";
import getSearchQueryParams from "../../utils/getQueryParams";

const Home = () => {
  const [fetchData, apiState] = useApi("");
  const [query, setQuery] = useState("");

  const currentQuery = useRef("");

  const inputHandler = (e) => setQuery(e.target.value);

  const onSearch = () => {
    if (!query.trim().length || currentQuery.current === query) return;

    currentQuery.current = query;
    const queryParam = getSearchQueryParams(query);
    fetchData(queryParam);
  };

  return (
    <div className={styles.homeContentWrapper}>
      <SearchBox
        placeholder={"Search Anything about tech"}
        onChange={inputHandler}
        shouldThrottle={true}
        onSearch={onSearch}
      />
      <List
        scrollableListHeight={"80vh"}
        data={apiState.data.hits}
        loading={apiState.loading}
        noDataText={'Nothing Found with the given query'}
        renderListHeader={<h3>Search results for "{currentQuery.current}"</h3>}
        renderListItem={(item) => (
          <List.Item itemData={item} key={item.objectID}>
            {item.title}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
