import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import styles from "./AttarCollection.module.css";
import attarHero from "../../assets/Attarbanner2.png";
import attar1 from "../../assets/attar1.webp";
import attar2 from "../../assets/attar2.webp";
import attar3 from "../../assets/attar3.webp";
import attar4 from "../../assets/attar4.webp";

const attars = [
  { id: "attar-1", name: "Royal Oud Attar", description: "Rich • Woody • Majestic", image: attar1 },
  { id: "attar-2", name: "Rose Musk Attar", description: "Floral • Soft • Elegant", image: attar2 },
  { id: "attar-3", name: "White Musk Attar", description: "Fresh • Pure • Timeless", image: attar3 },
  { id: "attar-4", name: "Amber Oud Attar", description: "Warm • Deep • Luxurious", image: attar4 },
].map(item => ({ ...item, category: "attar", size: "12 ml", price: 800 }));

const formatPrice = value => `₹${Number(value).toLocaleString("en-IN")}`;

export default function AttarCollection() {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();

  const scrollProducts = direction => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector("article");
    slider.scrollBy({ left: direction * (card ? card.offsetWidth + 16 : 260), behavior: "smooth" });
  };

  return (
    <section id ="attar-collection" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div className={styles.eyebrow}><Sparkles size={15} /><span>THE ESSENCE OF TRADITION</span><Sparkles size={15} /></div>
          <h2>The Art of Attar</h2>
          <p>Timeless fragrances, inspired by heritage and crafted for the senses.</p>
        </div>
        <div className={styles.collectionLayout}>
          <div className={styles.featuredPanel}>
            <img src={attarHero} alt="Shree Hari luxury attar collection" className={styles.featuredImage} />
            <div className={styles.featuredOverlay}>
              <span className={styles.featuredLabel}>SHREE HARI COLLECTION</span>
              <h3>A Legacy of Fragrance</h3>
              <p>Discover the beauty of traditional attars.</p>
              <Link to="/product/attar-1" className={styles.featuredButton}>Explore Collection <ArrowRight size={17} /></Link>
            </div>
          </div>
          <div className={styles.productsArea}>
            <div className={styles.productsHeader}>
              <div><span className={styles.smallLabel}>CURATED FRAGRANCES</span><h3>Discover Our Attars</h3></div>
              <div className={styles.sliderControls}>
                <button type="button" onClick={() => scrollProducts(-1)} aria-label="Previous attars"><ArrowLeft size={18} /></button>
                <button type="button" onClick={() => scrollProducts(1)} aria-label="Next attars"><ArrowRight size={18} /></button>
              </div>
            </div>
            <div className={styles.productsSlider} ref={sliderRef}>
              {attars.map(product => (
                <article className={styles.productCard} key={product.id}>
                  <Link to={`/product/${product.id}`} className={styles.productImageBox} aria-label={`View ${product.name}`}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <span className={styles.sizeBadge}>{product.size}</span>
                  </Link>
                  <div className={styles.productInfo}>
                    <Link to={`/product/${product.id}`} className={styles.productNameLink}><h4>{product.name}</h4></Link>
                    <p>{product.description}</p>
                    <div className={styles.priceRow}><strong>{formatPrice(product.price)}</strong></div>
                    <button type="button" className={styles.addButton} onClick={() => addToCart({ ...product, subtitle: product.size, mrp: product.price, quantity: 1 })}>
                      <ShoppingBag size={16} /> Add to Bag
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <Link to="/product/attar-1" className={styles.viewAll}>Explore Attars <ArrowRight size={17} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
