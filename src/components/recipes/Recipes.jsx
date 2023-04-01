import React from "react";
import "./Recipes.scss";
import Recipe from "../recipe/Recipe";
import recipe1 from "../../assets/images/recipe-1.jpeg";
import recipe2 from "../../assets/images/recipe-2.jpeg";
import recipe3 from "../../assets/images/recipe-3.jpeg";
import recipe4 from "../../assets/images/recipe-4.jpeg";

export default function Recipes(props) {
  const { item } = props;
  const menus = [
    {
      id: 1,
      image: recipe1,
      meal: "Avocado, and Tomato Salad",
      Restaurant: "dona's Kitchen",
    },
    {
      id: 2,
      image: recipe2,
      meal: "Chickpea & Butternut Squash Salad",
      Restaurant: "Tasty Treat",
    },
    {
      id: 3,
      image: recipe3,
      meal: "Spicy Chicken & Salad",
      Restaurant: "Yummy Foods",
    },
    {
      id: 4,
      image: recipe4,
      meal: "Chips, Avocado Creamy Sauce",
      Restaurant: "Ella Olsson",
    },
  ];
  return <Recipe item={menus} />;
}
