import React from 'react';
import styles from './Agarbatti.module.css';
import logo from '../../assets/logo.png';
// import scene from '../../assets/incense-scene.webp';
import lavender from '../../assets/lavender_agarbatti.webp';
import jasmine from '../../assets/jasmine.webp';
import sandalwood from '../../assets/sandalwood_agarbatti.webp';
import rose from '../../assets/rose_agarbatti.webp';

// Replace sample prices and image crops with your actual product data/photos when ready.
const sampleProducts = [
  { id: 'lavender', name: 'Lavender', subtitle: 'Scented Agarbatti', description: 'Calming aroma for a peaceful mind.', price: 120, image: lavender },
  { id: 'jasmine', name: 'Jasmine', subtitle: 'Scented Agarbatti', description: 'A refreshing fragrance for positive energy.', price: 120, image: jasmine },
  { id: 'sandalwood', name: 'Sandalwood', subtitle: 'Scented Agarbatti', description: 'A timeless classic for spiritual moments.', price: 120, image: sandalwood },
  { id: 'rose', name: 'Rose', subtitle: 'Scented Agarbatti', description: 'A floral touch for a blissful atmosphere.', price: 120, image: rose },
];

const perks = [
  { symbol: '❧', title: 'Premium Fragrances', subtitle: 'Long-lasting aroma' },
  { symbol: '✿', title: 'Perfect for Daily Rituals', subtitle: 'Create a peaceful space' },
  { symbol: '♧', title: 'Natural Ingredients', subtitle: 'Gentle and pure' },
  { symbol: '✧', title: 'Wide Range of Scents', subtitle: 'For every mood and occasion' },
];

export default function ScentedAgarbatti({
  products = sampleProducts,
  onAddToCart = () => {},
  collectionHref = '/category/scented-agarbatti',
}) {
  return (
    <section className={styles.section} aria-labelledby="agarbatti-title">
      <div className={styles.showcase}>
        <div className={styles.story}>
          <div className={styles.brand}><img src={logo} alt="Shree Hari Attar & Perfumes" /></div>
          <div className={styles.eyebrow}><span /> SCENTED AGARBATTI COLLECTION <span /></div>
          <h2 id="agarbatti-title">Where Every Scent<br />Tells a Story</h2>
          <p>Discover our range of premium scented agarbattis, crafted to bring peace, positivity and a touch of divine fragrance to your everyday rituals.</p>
          <a className={styles.primaryCta} href={collectionHref}>Explore Agarbatti Collection <span aria-hidden="true">→</span></a>
          {/* <img className={styles.scene} src={scene} alt="Incense sticks with flowers and traditional brass decor" /> */}
        </div>

        <div className={styles.collection}>
          <div className={styles.collectionTop}>
            <a href={collectionHref}>VIEW ALL SCENTED AGARBATTI <span aria-hidden="true">→</span></a>
          </div>
          <div className={styles.productGrid}>
            {products.map(product => (
              <article className={styles.card} key={product.id}>
                <div className={styles.arch}><img src={product.image} alt={`${product.name} scented agarbatti`} loading="lazy" /></div>
                <div className={styles.cardBody}>
                  <h3>{product.name}</h3>
                  <div className={styles.subtitle}>{product.subtitle || 'Scented Agarbatti'}</div>
                  <p>{product.description}</p>
                  <div className={styles.price}>₹{Number(product.price).toLocaleString('en-IN')}</div>
                  <button type="button" onClick={() => onAddToCart(product)}><span aria-hidden="true">🛒</span> Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.benefits}>
        {perks.map(perk => (
          <div className={styles.benefit} key={perk.title}>
            <span className={styles.benefitIcon} aria-hidden="true">{perk.symbol}</span>
            <div><strong>{perk.title}</strong><small>{perk.subtitle}</small></div>
          </div>
        ))}
      </div>
    </section>
  );
}
