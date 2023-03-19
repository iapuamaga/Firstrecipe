import React from "react";
import "./Home.scss";
import recipe1 from "../assets/images/recipe-1.jpeg";
import recipe2 from "../assets/images/recipe-2.jpeg";
import recipe3 from "../assets/images/recipe-3.jpeg";
import recipe4 from "../assets/images/recipe-4.jpeg";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Search from "../components/search/Search";
import Hero from "../components/hero/Hero";
import Recipes from "../components/recipes/Recipes";
import Recipe from "../components/recipe/Recipe";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Search />
        <Hero />
        <Recipes>
          <Recipe
            image={recipe1}
            title="Avocado, and Tomato Salad"
            kitchen="dona's Kitchen"
          />
          <Recipe
            image={recipe2}
            title="Chickpea & Butternut Squash Salad"
            kitchen="Tasty Treat"
          />
          <Recipe
            image={recipe3}
            title="Spicy Chicken & Salad"
            kitchen="Yummy Foods"
          />
          <Recipe
            image={recipe4}
            title="Chips, Avocado Creamy Sauce"
            kitchen="Ella Olsson"
          />
        </Recipes>
      </Main>
      <Footer />
    </Container>
  );
}
