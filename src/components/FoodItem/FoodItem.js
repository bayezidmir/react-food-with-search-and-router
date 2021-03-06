import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const FoodItem = ({ foodData }) => {
  const { strMeal, strMealThumb, idMeal } = foodData;

  const navigate = useNavigate();

  const foodDetail = () => {
    const path = `/food/${idMeal}`;
    navigate(path);
  };

  return (
    <div className="col-md-4 col-lg-3 border p-1 mx-auto">
      <img src={strMealThumb} alt="" className="img-fluid rounded " />
      <h4>{strMeal}</h4>
      <Link to={`/food/${idMeal}`} className="me-3 mb-3 text-decoration-none">
        Food Details
      </Link>
      <button
        onClick={foodDetail}
        className="btn btn-danger text-white font-bold"
      >
        Food Details
      </button>
    </div>
  );
};

export default FoodItem;
