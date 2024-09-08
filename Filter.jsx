import React from "react";
import './Filter.css';

const Filter = ({ setFilterStatus }) => {
  return (
    <div className="filter-container">
      <label>Filter Tasks:</label>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not completed">Not Completed</option>
      </select>
    </div>
  );
};

export default Filter;
