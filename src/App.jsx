// src/App.jsx
import React from 'react';
import Header from './Components/Header/Header';
import CarouselComponent from './Components/Carousel/CarouselComponent';
import Category from './Components/Category/Category';

function App() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <Category/>
    </div>
  );
}

export default App;
