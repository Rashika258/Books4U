import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import FrontTopLayout from "../components/FrontTopLayout";


function HomeScreen() {
  return (
  <>
    <FrontTopLayout />
    <CarouselComponent />
    <BookLayout />
  </>
  )
}

export default HomeScreen