import React from 'react'
import Hero from '../../hero/Hero'
import Categories from '../../categories/Categories'
import Banner from '../../Banner/Banner'
import FeaturedProducts from '../../Products/Products'
import ScentedAgarbatti from '../../Agarbatti/Agarbatti'
import AttarCollection from '../../Attar/AttarCollection'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const { hash } = useLocation();
 
useEffect(() => {

  if (!hash) return;
 
  const id = hash.substring(1);
 
  const timer = setTimeout(() => {

    document.getElementById(id)?.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

  }, 100);
 
  return () => clearTimeout(timer);

}, [hash]);
 
  return (
    <div>
        
        
        <Hero></Hero>
    <Categories></Categories>
    <Banner/>
    <FeaturedProducts></FeaturedProducts>
    <AttarCollection></AttarCollection>
    <ScentedAgarbatti></ScentedAgarbatti>

    </div>
  )
}

export default Home