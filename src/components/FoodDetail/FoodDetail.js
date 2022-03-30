import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetail = () => {
  const { detailId } = useParams();

  const [foodDetail, setFoodDetail] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoodDetail(data.meals[0]));
  }, [detailId]);

  return (
    <div className="p-4">
      <img className="img-fluid mb-3" src={foodDetail.strMealThumb} alt="" />
      <p>
        <strong>Food Name:</strong> {foodDetail.strMeal}
      </p>
      <p>
        <strong>Details:</strong> {foodDetail.strInstructions?.slice(0, 250)}
      </p>
      <p>
        <strong>Origin:</strong> {foodDetail.strArea}
      </p>
      <a href={foodDetail.strYoutube} target="_blank" rel="noreferrer">
        Youtube Link
      </a>
    </div>
  );
};

export default FoodDetail;
