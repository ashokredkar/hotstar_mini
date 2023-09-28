import React from 'react';
import './style.scss';

import Hero from "./heroBanner/Hero";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";


const Home = () => {
  return (
    <div className="homePage">
        <Hero />
        <Trending />
        <Popular />
        <TopRated />
    </div>
  )
}

export default Home