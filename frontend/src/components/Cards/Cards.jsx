import React, { useState } from "react";
import Card from "../Card/Card";
import "./Cards.scss";
function Cards({ data }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const sorter = (e) => {
    setSort(e.target.value);
  };

  const sortMe = (data, option) => {
    switch (option) {
      case "azdan":
        return [...data].sort((a, b) => b.price - a.price);
      case "coxdan":
        return [...data].sort((a, b) => a.price - b.price);
      case "az":
        return [...data].sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
      case "za":
        return [...data].sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });

      default:
        return data;
    }
  };
  const newData = sortMe(data, sort);
  return (
    <section className="watches" onChange={sorter}>
      <span>ADJUSTABLE STRAPS</span>
      <h2>Choose the best color for your activity</h2>
      <select name="sort" id="sort">
        <option value="azdan">Expensive to Low</option>
        <option value="coxdan">Low to Expensive</option>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="default">Default</option>
      </select>
      <div className="cards">
        {newData.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
      <button id="see">See More</button>
    </section>
  );
}

export default Cards;
