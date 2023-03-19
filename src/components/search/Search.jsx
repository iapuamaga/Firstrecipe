import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <>
      <section>
        <input
          className="search_field"
          type="text"
          placeholder="Search for a recipe"
        />
        <button className="search_btn">Search</button>
      </section>
    </>
  );
}
