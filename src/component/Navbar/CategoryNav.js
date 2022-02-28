import React from "react";

const CategoryNav = ({ filterHandler, category }) => {
  const formSubmit = (event) => {
    if (event.target.textContent === "Video Games") {
      filterHandler(event.target.textContent.split(" ")[1].toLowerCase());
    } else if (event.target.textContent === "All") {
      filterHandler("");
    } else if (event.target.textContent === "Clothing/Fashion") {
      filterHandler("clothing");
    } else {
      filterHandler(event.target.textContent.toLowerCase());
    }
  };

  //width divided by number of categories in category navbar
  const width = 100 / 10;

  return (
    <div className="category-nav-bar">
      <span
        onClick={formSubmit}
        className={category === "" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        All
      </span>
      <span
        onClick={formSubmit}
        className={category === "clothing" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Clothing/Fashion
      </span>
      <span
        onClick={formSubmit}
        className={category === "electronics" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Electronics
      </span>
      <span
        onClick={formSubmit}
        className={category === "games" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Video Games
      </span>
      <span
        onClick={formSubmit}
        className={category === "music" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Music
      </span>
      <span
        onClick={formSubmit}
        className={category === "vintage" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Vintage
      </span>
      <span
        onClick={formSubmit}
        className={category === "beauty" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Beauty
      </span>
      <span
        onClick={formSubmit}
        className={category === "sports" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Sports
      </span>
      <span
        onClick={formSubmit}
        className={category === "food/drink" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Food/Drink
      </span>
      <span
        onClick={formSubmit}
        className={category === "hobbies" ? "highlighted" : "none"}
        style={{ width: `${width}%` }}
      >
        Hobbies
      </span>
    </div>
  );
};

export default CategoryNav;
