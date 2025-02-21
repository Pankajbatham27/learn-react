import React, { useState } from "react";

function SearchWithDebounce() {
  const [query, setQuery] = useState("");

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = (value) => {
    console.log("API call for:", value); 
    setQuery(value);
  };

  const debouncedSearch = debounce(handleSearch, 300);

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => debouncedSearch(e.target.value)}
    />
  );
}

export default SearchWithDebounce;
