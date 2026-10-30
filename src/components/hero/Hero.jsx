
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
    
  return (
  <>

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
          <Link to ='/products'> <a href="#shop" className="btn-primary">
            Shop Collection <span>↗</span>
          </a>
          </Link>

          <a href="#about" className="btn-secondary">
            Discover More
          </a>
        </div>

        <div className="hero-footer">
          <span>01 / 03</span>
          <span>EXCEPTIONAL FRAGRANCES</span>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-glow"></div>

        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85"
          alt="Luxury perfume bottle"
        />

        <div className="image-label">
          <span>EAU DE PARFUM</span>
          <h3>Golden Essence</h3>
          <p>A fragrance beyond time.</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Hero;
