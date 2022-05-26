import React from "react";
import BookLayout from "../components/BookLayout";
import CarouselComponent from "../components/CarouselComponent";
import GenreLayout from "../components/GenreLayout";
import PopularLayout from "../components/PopularLayout";

function HomeScreen() {
  return (
    <>
      <CarouselComponent />
      <PopularLayout />
      <BookLayout />
      <GenreLayout />
    </>
  );
}

export default HomeScreen;
