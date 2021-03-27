import React from "react";

function Search(props) {
  const { searchTerm, handleChange } = props;
  return (
    <div>
      <input
        className="form-control"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by Name and Phone"
      />
    </div>
  );
}

export default Search;
