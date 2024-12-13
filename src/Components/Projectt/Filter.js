import React from 'react';

const Filter = ({ filter, setFilter, searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
      />
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default Filter;