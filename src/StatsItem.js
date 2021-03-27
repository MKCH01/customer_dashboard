import React from "react";

function StatsItem(props) {
  const { count, text } = props;
  return (
    <div>
      <h1>{count}</h1>
      <h3>{text} </h3>
    </div>
  );
}

export default StatsItem;
