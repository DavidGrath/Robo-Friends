import React, { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/CardList";
import ErrorBoundary from "./components/ErrorBoundary";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";

function App({ ...props }) {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
      });
  }, []);

  useEffect(
    function () {
      console.log("COU: " + count);
    },
    [count]
  );

  function onSearch(event) {
    const text = event.target.value;
    setSearchField(text.toLowerCase());
    setCount(count + 1);
  }

  const filtered = robots.filter((r) => {
    if (!searchField.length) {
      return true;
    }
    if (r.name.toLowerCase().includes(searchField)) {
      return true;
    }
    if (r.email.toLowerCase().includes(searchField)) {
      return true;
    }
    return false;
  });
  const mainComponent = () => {
    return (
      <div>
        <h1 className="f1">Robo Friends</h1>
        <SearchBox onSearch={onSearch} />
        <Scroll>
          <ErrorBoundary>
            <CardList data={filtered} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  };
  const loadingComponent = () => {
    return <h2>Loading...</h2>;
  };
  const body = robots.length ? mainComponent() : loadingComponent();
  return <div className="tc">{body}</div>;
}

export default App;
