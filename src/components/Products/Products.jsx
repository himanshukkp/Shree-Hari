
import styles from './Products.module.css'
import React, { useRef, useState } from "react";

import {

  Heart,

  ShoppingBag,

  Eye,

  ChevronLeft,

  ChevronRight,

  ArrowRight,

  Star,

  Flower2,

} from "lucide-react";
import featuredBg from '../../assets/featured-bg.png'
 
 
import godfather from "../../assets/god_father.webp";

import gucci from "../../assets/gucci_flora.webp";

import afgano from "../../assets/black_afgano.webp";

import channel from "../../assets/blue_de_channel.webp";

import bombshell from "../../assets/bomshell.webp";

import br540 from "../../assets/br_540.webp";
 
const featuredProducts = [



  {

    id: 1,

    name: "GODFATHER",

    category: "ATTAR & PERFUME",

    description: "A refreshing blend with floral notes and a hint of oud.",

    image: godfather,

    color: "green",

    rating: 5,

    reviews: 24,

  },

  {

    id: 2,

    name: "GUCCI FLORA",

    category: "ATTAR & PERFUME",

    description: "A rich and warm fragrance with exotic amber notes.",

    image: gucci,

    color: "amber",

    rating: 5,

    reviews: 18,

  },

  {

    id: 3,

    name: "BLACK AFGANO",

    category: "ATTAR & PERFUME",

    description: "A long-lasting, elegant fragrance for special moments.",

    image: afgano,

    color: "purple",

    rating: 5,

    reviews: 31,

  },

  {

    id: 4,

    name: "BLUE-DE-CHANNEL",

    category: "ATTAR & PERFUME",

    description: "A bold and sophisticated scent with deep woody notes.",

    image: channel,

    color: "blue",

    rating: 5,

    reviews: 27,

  },

  {

    id: 5,

    name: "BOMBSHELL",

    category: "ATTAR & PERFUME",

    description: "A bold and sophisticated scent with deep woody notes.",

    image: bombshell,

    color: "blue",

    rating: 5,

    reviews: 27,

  },


  {

    id: 6,

    name: "BR.540",

    category: "ATTAR & PERFUME",

    description: "A bold and sophisticated scent with deep woody notes.",

    image: br540,

    color: "blue",

    rating: 5,

    reviews: 27,

  },




  


];
 
const FeaturedProducts = ({

  products = featuredProducts,

  onAddToCart,

  onQuickView,

  onViewAll,

}) => {

  const sliderRef = useRef(null);

  const [wishlist, setWishlist] = useState([]);
 
  const toggleWishlist = (id) => {

    setWishlist((prev) =>

      prev.includes(id)

        ? prev.filter((item) => item !== id)

        : [...prev, id]

    );

  };
 
  const scrollProducts = (direction) => {

    const slider = sliderRef.current;

    if (!slider) return;
 
    const firstCard = slider.querySelector("article");

    if (!firstCard) return;
 
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;

    const distance = firstCard.getBoundingClientRect().width + gap;
 
    slider.scrollBy({

      left: direction * distance,

      behavior: "smooth",

    });

  };
 
  return (
<section

      className={styles.featuredSection}

      style={{ "--featured-bg": `url("${featuredBg}")` }}
>
<div className={styles.sectionOverlay} />
 
      <div className={styles.sectionContainer}>
<header className={styles.sectionHeader}>
<div className={styles.eyebrow}>
<Flower2 size={18} strokeWidth={1.5} />
<span>THE SHREE HARI COLLECTION</span>
<Flower2 size={18} strokeWidth={1.5} />
</div>
 
          <div className={styles.smallOrnament}>
<span />
<Flower2 size={15} />
<span />
</div>
 
          <h2>Scents Worth Remembering</h2>
 
          <p>

            Discover our signature attars and perfumes,

            crafted with timeless traditions
<br className={styles.desktopBreak} />

            {" "}to leave a lasting impression.
</p>
 
          <div className={styles.headingDivider}>
<span />
<Flower2 size={23} strokeWidth={1.5} />
<span />
</div>
</header>
 
        <div className={styles.sliderWrapper}>
<button

            type="button"

            className={`${styles.sliderArrow} ${styles.prevArrow}`}

            onClick={() => scrollProducts(-1)}

            aria-label="Previous products"
>
<ChevronLeft size={26} />
</button>
 
          <div className={styles.productsSlider} ref={sliderRef}>

            {products.map((product) => (
<article

                className={`${styles.productCard} ${

                  styles[product.color] || styles.green

                }`}

                key={product.id}
>
<div className={styles.imageFrame}>
<img

                    src={product.image}

                    alt={product.name}

                    className={styles.productImage}

                    loading="lazy"

                  />
 
                  <button

                    type="button"

                    className={`${styles.wishlistBtn} ${

                      wishlist.includes(product.id)

                        ? styles.wishlistActive

                        : ""

                    }`}

                    onClick={() => toggleWishlist(product.id)}

                    aria-label={

                      wishlist.includes(product.id)

                        ? `Remove ${product.name} from wishlist`

                        : `Add ${product.name} to wishlist`

                    }

                    aria-pressed={wishlist.includes(product.id)}
>
<Heart

                      size={20}

                      fill={

                        wishlist.includes(product.id)

                          ? "currentColor"

                          : "none"

                      }

                    />
</button>
</div>
 
                <div className={styles.productDetails}>
<h3>{product.name}</h3>
 
                  <span className={styles.category}>

                    {product.category}
</span>
 
                  <p className={styles.description}>

                    {product.description}
</p>
 
                  <div

                    className={styles.rating}

                    aria-label={`${product.rating} out of 5 stars, ${product.reviews} reviews`}
>
<div className={styles.stars}>

                      {Array.from({ length: 5 }, (_, i) => (
<Star

                          key={i}

                          size={16}

                          fill={

                            i < product.rating

                              ? "currentColor"

                              : "none"

                          }

                        />

                      ))}
</div>
 
                    <span>({product.reviews})</span>
</div>
 
                  <div className={styles.cardActions}>
<button

                      type="button"

                      className={styles.addToCartBtn}

                      onClick={() => onAddToCart?.(product)}

                      disabled={!onAddToCart}
>
<ShoppingBag size={18} strokeWidth={1.7} />
<span>Add to Cart</span>
</button>
 
                    <button

                      type="button"

                      className={styles.quickViewBtn}

                      onClick={() => onQuickView?.(product)}

                      disabled={!onQuickView}

                      aria-label={`Quick view ${product.name}`}
>
<Eye size={20} strokeWidth={1.7} />
</button>
</div>
</div>
</article>

            ))}
</div>
 
          <button

            type="button"

            className={`${styles.sliderArrow} ${styles.nextArrow}`}

            onClick={() => scrollProducts(1)}

            aria-label="Next products"
>
<ChevronRight size={26} />
</button>
</div>
 
        <div className={styles.bottomAction}>
<button

            type="button"

            className={styles.viewAllBtn}

            onClick={onViewAll}

            disabled={!onViewAll}
>

            View All Perfumes
<ArrowRight size={18} />
</button>
</div>
</div>
</section>

  );

};
 
export default FeaturedProducts;

 