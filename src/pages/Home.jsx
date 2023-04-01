import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Search from "../components/search/Search";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Recipes from "../components/recipes/Recipes";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Search />
        <Hero />
        <Recipes></Recipes>
      </Main>
      <Footer />
    </Container>
  );
}
