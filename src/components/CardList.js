import React from "react";

import Card from "./Card";

function CardList({ data, ...props }) {
  const components = data.map(function (r, i) {
    return <Card key={r.id} robot={r} />;
  });

  function emptyComponent() {
    return <h2>Empty!</h2>;
  }
  const body = components.length ? components : emptyComponent();
  return <div>{body}</div>;
}

export default CardList;
