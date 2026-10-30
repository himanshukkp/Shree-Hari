

import React, { useState } from "react";

import { Link } from "react-router-dom";

import {

  ShoppingCart,

  Heart,

  ChevronRight,

  Star,

  ArrowRight,

} from "lucide-react";
 
import styles from "./AllProducts.module.css";
 
import heroImage from "../../assets/image.png";
 
import rebel from "../../assets/afnan_rebel.webp";

import tonka from "../../assets/arabian_tonka.webp";

import afgano from "../../assets/black_afgano.webp";

import channel from "../../assets/blue_de_channel.webp";

import bombshell from "../../assets/bomshell.webp";

import br540 from "../../assets/br_540.webp";

import godfather from "../../assets/god_father.webp";

import gucci from "../../assets/gucci_flora.webp";

import lovedrop from "../../assets/love_drop.webp";

import Lv from "../../assets/lv_imagination.webp";

import ombre from "../../assets/ombre_nomade.webp";

import marj from "../../assets/saudi_marj.webp";

import ysl from "../../assets/ysl_libre.webp";
import hawas from "../../assets/hawas_tropical.webp";

import oudMaracuja from "../../assets/oud_maracuja.webp";

import dior from "../../assets/dior_sauvage.webp";

import creed from "../../assets/creed_aventus.webp";

import jannat from "../../assets/jannat_e_zuhur.webp";

import afnan9pm from "../../assets/afnan_rebel_9pm.webp";

import musk from "../../assets/musk_rijali.webp";
 
 
const products = [

  {

    id: 1,

    name: "Afnan Rebel",

    description: "12ml | Long Lasting",

    price: 1300,

    mrp: 1799,

    rating: 4.8,

    reviews: 128,

    badge: "Bestseller",

    badgeType: "gold",

    image: rebel,

  },

  {

    id: 2,

    name: "Arabian Tonka",

    description: "50ml | Floral & Elegant",

    price: 1300,

    mrp: 2598,

    rating: 4.7,

    reviews: 96,

    badge: "New Arrival",

    badgeType: "green",

    image: tonka,

  },

  {

    id: 3,

    name: "Black Afgano",

    description: "30ml | Rich & Long Lasting",

    price: 1300,

    mrp: 1300,

    rating: 4.6,

    reviews: 74,

    badge: "Premium",

    badgeType: "maroon",

    image: afgano,

  },

  {

    id: 4,

    name: "Blue de Channel",

    description: "50ml | Fresh & Subtle",

    price: 1299,

    mrp: 1599,

    rating: 4.8,

    reviews: 112,

    badge: "Trending",

    badgeType: "pink",

    image: channel,

  },

  {

    id: 5,

    name: "Bombshell",

    description: "12ml | Warm & Earthy",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 64,

    badge: "Limited Edition",

    badgeType: "maroon",

    image: bombshell,

  },

  {

    id: 6,

    name: "BR.540",

    description: "30ml | Traditional Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.8,

    reviews: 89,

    badge: "Bestseller",

    badgeType: "gold",

    image: br540,

  },

  {

    id: 7,

    name: "Godfather",

    description: "50ml | Rose & Saffron",

    price: 1300,

    mrp: 1300,

    rating: 4.6,

    reviews: 53,

    badge: "New Arrival",

    badgeType: "green",

    image: godfather,

  },

  {

    id: 8,

    name: "GUCCI FLORA",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: gucci,

  },

  {

    id: 9,

    name: "LOVE DROP",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: lovedrop,

  },

  {

    id: 10,

    name: "LV IMAGINATION",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: Lv,

  },
{

    id: 11,

    name: "OMBRE NORMADE",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: ombre,

  },
{

    id: 12,

    name: "SAUDI MARJ",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: marj,

  },
{

    id: 13,

    name: "YSL LIBRE",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: ysl,

  },



  {

    id: 14,

    name: "HAWAS TROPHICAL",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: hawas,

  },



  {

    id: 15,

    name: "OUD MARACUJA",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: oudMaracuja,

  },




  {

    id: 16,

    name: "DIOR SAUVAGE",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: dior,

  },






  {

    id: 17,

    name: "CREED AVENTUS",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: creed,

  },





  {

    id: 18,

    name: "JANNAT-E-JUHUR",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: jannat,

  },





  {

    id: 19,

    name: "AFNAN LABEl 9PM",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: afnan9pm,

  },



  {

    id: 20,

    name: "MUSK RIJALI",

    description: "12ml | Classic Blend",

    price: 1300,

    mrp: 1300,

    rating: 4.7,

    reviews: 71,

    badge: "Premium",

    badgeType: "maroon",

    image: musk,

  },


];
 
const formatPrice = (price) => {

  return new Intl.NumberFormat("en-IN", {

    style: "currency",

    currency: "INR",

    maximumFractionDigits: 0,

  }).format(price);

};
 
function ProductCard({

  product,

  onAddToCart,

  onWishlistToggle,

  isWishlisted,

}) {

  const discount = Math.round(

    ((product.mrp - product.price) / product.mrp) * 100

  );
 
  return (
<article className={styles.productCard}>
<div className={styles.productImageBox}>
<Link

          to={`/product/${product.id}`}

          className={styles.imageLink}
>
<img

            src={product.image}

            alt={product.name}

            loading="lazy"

          />
</Link>
 
        {product.badge && (
<span

            className={`${styles.productBadge} ${

              styles[product.badgeType] || ""

            }`}
>

            {product.badge}
</span>

        )}
</div>
 
      <div className={styles.productDetails}>
<Link

          to={`/product/${product.id}`}

          className={styles.productName}
>

          {product.name}
</Link>
 
        <p className={styles.productDescription}>

          {product.description}
</p>
 
        <div className={styles.ratingRow}>
<div

            className={styles.stars}

            aria-label={`Rated ${product.rating} out of 5`}
>

            {[1, 2, 3, 4, 5].map((star) => (
<Star

                key={star}

                size={14}

                fill={

                  star <= Math.round(product.rating)

                    ? "currentColor"

                    : "none"

                }

              />

            ))}
</div>
 
          <span className={styles.reviewCount}>

            ({product.reviews})
</span>
</div>
 
        <div className={styles.priceRow}>
<div className={styles.priceGroup}>
<span className={styles.currentPrice}>

              {formatPrice(product.price)}
</span>
 
            <span className={styles.oldPrice}>

              {formatPrice(product.mrp)}
</span>
</div>
 
          {discount > 0 && (
<span className={styles.discount}>

              {discount}% OFF
</span>

          )}
</div>
 
        <div className={styles.productActions}>
<button

            type="button"

            className={styles.addToCart}

            onClick={() => onAddToCart?.(product)}
>
<ShoppingCart size={17} />
<span>Add to Cart</span>
</button>
 
          <button

            type="button"

            className={`${styles.wishlistButton} ${

              isWishlisted ? styles.wishlisted : ""

            }`}

            onClick={() => onWishlistToggle(product.id)}

            aria-label={

              isWishlisted

                ? `Remove ${product.name} from wishlist`

                : `Add ${product.name} to wishlist`

            }

            aria-pressed={isWishlisted}
>
<Heart

              size={20}

              fill={isWishlisted ? "currentColor" : "none"}

            />
</button>
</div>
</div>
</article>

  );

}
 
export default function AllProducts({

  productList = products,

  onAddToCart,

}) {

  const [wishlist, setWishlist] = useState([]);

  const [visibleCount, setVisibleCount] = useState(8);
 
  const visibleProducts = productList.slice(0, visibleCount);
 
  const toggleWishlist = (productId) => {

    setWishlist((previous) =>

      previous.includes(productId)

        ? previous.filter((id) => id !== productId)

        : [...previous, productId]

    );

  };
 
  return (
<main className={styles.productsPage}>

      {/* HERO BANNER */}
 
      <section

        className={styles.heroBanner}>
{/* <div className={styles.heroContent}>
<span className={styles.heroEyebrow}>

            SHREE HARI ATTAR & PERFUMES
</span>
 
          <h1>Our Fragrance Collection</h1>
 
          <p>

            Get lost in the essence of timeless fragrances.
</p>
 
          <div className={styles.heroDecoration}>
<span />
<span className={styles.decorationSymbol}>✦</span>
<span />
</div>
</div> */}
</section>
 
      {/* PRODUCTS SECTION */}
 
      <section className={styles.productsSection}>
<div className={styles.container}>
<div className={styles.topBar}>
<nav

              className={styles.breadcrumb}

              aria-label="Breadcrumb"
>
<Link to="/">Home</Link>
<ChevronRight size={15} />
<span>All Products</span>
</nav>
 
            <span className={styles.productCount}>

              Showing {visibleProducts.length} of{" "}

              {productList.length} products
</span>
</div>
 
          <div className={styles.sectionHeading}>
<span className={styles.sectionEyebrow}>

              DISCOVER OUR COLLECTION
</span>
 
            <h2>Explore Our Fragrances</h2>
 
            <p>

              Discover fragrances thoughtfully chosen for

              every mood, moment and occasion.
</p>
 
            <div className={styles.headingDecoration}>
<span />

              ✦
<span />
</div>
</div>
 
          <div className={styles.productsGrid}>

            {visibleProducts.map((product) => (
<ProductCard

                key={product.id}

                product={product}

                onAddToCart={onAddToCart}

                onWishlistToggle={toggleWishlist}

                isWishlisted={wishlist.includes(product.id)}

              />

            ))}
</div>
 
          {productList.length === 0 && (
<p className={styles.emptyMessage}>

              No products available at the moment.
</p>

          )}
 
          {visibleCount < productList.length && (
<div className={styles.loadMoreWrapper}>
<button

                type="button"

                className={styles.loadMoreButton}

                onClick={() =>

                  setVisibleCount((count) => count + 8)

                }
>

                View More Products
<ArrowRight size={18} />
</button>
</div>

          )}
</div>
</section>
</main>

  );

}

 