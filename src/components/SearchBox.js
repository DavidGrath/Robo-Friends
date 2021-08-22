import React from "react";

function SearchBox({ onSearch, ...props }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search for a Robot"
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBox;
