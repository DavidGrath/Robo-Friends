import React from "react";
import "./Card.css";

function Card({ robot, ...props }) {
  const url = `https://robohash.org/${robot.id}?size=300x300`;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Robot Friend Profile" src={url} />
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </div>
  );
}

export default Card;
