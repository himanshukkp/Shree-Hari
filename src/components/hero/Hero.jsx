

import React from "react";

import { Link } from "react-router-dom";

import "./Hero.css";
 
import heroVideo from "../../assets/shree-hari-hero.mp4";

import poster from "../../assets/black_afgano.webp";
 
function Hero() {

  return (
<section className="hero">
<div className="hero-content">
<span className="hero-subtitle">

          THE ART OF FINE FRAGRANCE
</span>
 
        <h1>

          A Scent That
<br />
<span>Defines You.</span>
</h1>
 
        <p className="hero-description">

          Discover the essence of timeless luxury.

          Exquisite fragrances crafted to express

          your individuality and leave a lasting

          impression.
</p>
 
        <div className="hero-buttons">
<Link to="/products" className="btn-primary">

            Shop Collection <span aria-hidden="true">↗</span>
</Link>
</div>
 
        <div className="hero-footer">
<span>01 / 03</span>
<span>EXCEPTIONAL FRAGRANCES</span>
</div>
</div>
 
      <div className="hero-video">
<video

          className="hero-video-element"

          autoPlay

          muted

          loop

          playsInline

          preload="metadata"

          poster={poster}

          aria-label="Shree Hari luxury fragrance promotional video"
>
<source src={heroVideo} type="video/mp4" />
</video>
</div>
</section>

  );

}
 
export default Hero;

 