

import React, { useRef } from "react";

import { Link } from "react-router-dom";

import {

  ArrowRight,

  ArrowLeft,

  ShoppingBag,

  Sparkles,

} from "lucide-react";
 
import { useCart } from "../../Context/CartContext";

import styles from "./AttarCollection.module.css";
 
// Replace these with your actual attar images.

import attarHero from "../../assets/Attarbanner2.png";

import attar1 from "../../assets/attar1.webp";

import attar2 from "../../assets/attar2.webp";;

import attar3 from "../../assets/attar3.webp";

import attar4 from "../../assets/attar4.webp";
 
// Sample products: update names, prices, and IDs

// when your actual attar catalog is ready.

const attars = [

  {

    id: "attar-1",

    name: "Royal Oud Attar",

    description: "Rich • Woody • Majestic",

    size: "12 ml",

    price: 799,

    mrp: 999,

    image: attar1,

  },

  {

    id: "attar-2",

    name: "Rose Musk Attar",

    description: "Floral • Soft • Elegant",

    size: "12 ml",

    price: 649,

    mrp: 899,

    image: attar2,

  },

  {

    id: "attar-3",

    name: "White Musk Attar",

    description: "Fresh • Pure • Timeless",

    size: "12 ml",

    price: 699,

    mrp: 949,

    image: attar3,

  },

  {

    id: "attar-4",

    name: "Amber Oud Attar",

    description: "Warm • Deep • Luxurious",

    size: "12 ml",

    price: 899,

    mrp: 1199,

    image: attar4,

  },

];
 
const formatPrice = (value) =>

  new Intl.NumberFormat("en-IN", {

    style: "currency",

    currency: "INR",

    maximumFractionDigits: 0,

  }).format(value);
 
function AttarCollection() {

  const sliderRef = useRef(null);

  const { addToCart } = useCart();
 
  const scrollProducts = (direction) => {

    const slider = sliderRef.current;

    if (!slider) return;
 
    const card = slider.querySelector("article");

    const distance = card ? card.offsetWidth + 16 : 260;
 
    slider.scrollBy({

      left: direction * distance,

      behavior: "smooth",

    });

  };
 
  return (
<section className={styles.section}>
<div className={styles.container}>
<div className={styles.sectionHeading}>
<div className={styles.eyebrow}>
<Sparkles size={15} />
<span>THE ESSENCE OF TRADITION</span>
<Sparkles size={15} />
</div>
 
          <h2>The Art of Attar</h2>
 
          <p>

            Timeless fragrances, inspired by heritage and

            crafted for the senses.
</p>
</div>
 
        <div className={styles.collectionLayout}>

          {/* Featured Visual */}
<div className={styles.featuredPanel}>
<img

              src={attarHero}

              alt="Shree Hari luxury attar collection"

              className={styles.featuredImage}

            />
 
            <div className={styles.featuredOverlay}>
<span className={styles.featuredLabel}>

                SHREE HARI COLLECTION
</span>
 
              <h3>A Legacy of Fragrance</h3>
 
              <p>

                Discover the beauty of traditional attars.
</p>
 
              <Link to="/products" className={styles.featuredButton}>

                Explore Collection
<ArrowRight size={17} />
</Link>
</div>
</div>
 
          {/* Product Collection */}
<div className={styles.productsArea}>
<div className={styles.productsHeader}>
<div>
<span className={styles.smallLabel}>

                  CURATED FRAGRANCES
</span>
<h3>Discover Our Attars</h3>
</div>
 
              <div className={styles.sliderControls}>
<button

                  type="button"

                  onClick={() => scrollProducts(-1)}

                  aria-label="Previous attars"
>
<ArrowLeft size={18} />
</button>
 
                <button

                  type="button"

                  onClick={() => scrollProducts(1)}

                  aria-label="Next attars"
>
<ArrowRight size={18} />
</button>
</div>
</div>
 
            <div className={styles.productsSlider} ref={sliderRef}>

              {attars.map((product) => (
<article

                  className={styles.productCard}

                  key={product.id}
>
<div className={styles.productImageBox}>
<img

                      src={product.image}

                      alt={product.name}

                      loading="lazy"

                    />
 
                    <span className={styles.sizeBadge}>

                      {product.size}
</span>
</div>
 
                  <div className={styles.productInfo}>
<h4>{product.name}</h4>
 
                    <p>{product.description}</p>
 
                    <div className={styles.priceRow}>
<strong>{formatPrice(product.price)}</strong>
 
                      <del>{formatPrice(product.mrp)}</del>
</div>
 
                    <button

                      type="button"

                      className={styles.addButton}

                      onClick={() =>

                        addToCart({

                          ...product,

                          subtitle: product.size,

                          quantity: 1,

                        })

                      }
>
<ShoppingBag size={16} />

                      Add to Bag
</button>
</div>
</article>

              ))}
</div>
 
            <Link to="/products" className={styles.viewAll}>

              View All Fragrances
<ArrowRight size={17} />
</Link>
</div>
</div>
</div>
</section>

  );

}
 
export default AttarCollection;

 