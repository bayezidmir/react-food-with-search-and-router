import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";

const Food = () => {
  const [SearchedFood, setSearchedFood] = useState("");
  const [foundFood, setFoundFood] = useState([]);
  console.log(foundFood);
  const searchFood = (e) => {
    setSearchedFood(e.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchedFood}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoundFood(data.meals));
  }, [SearchedFood]);

  return (
    <div className="p-5">
      <input
        type="text"
        placeholder="Search Food"
        className="w-25 rounded"
        onChange={searchFood}
      />
      <h2>Food Found: {foundFood.length}</h2>
      <div className="row rounded gap-2">
        {foundFood.map((food) => (
          <FoodItem key={food.idMeal} foodData={food} />
        ))}
      </div>
    </div>
  );
};

export default Food;
