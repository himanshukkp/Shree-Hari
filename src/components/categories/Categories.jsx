import React from 'react';
import styles from './Categories.module.css';
import attars from '../../assets/attars.webp';
import perfumes from '../../assets/perfumes.webp';
import agarbatti from '../../assets/agarbatti.webp';
import gifts from '../../assets/gift-hampers.webp';
import fresheners from '../../assets/room-fresheners.webp';
import bakhoors from '../../assets/bakhoors.webp';
import burners from '../../assets/bakhoor-burners.webp';
import soaps from '../../assets/scented-soaps.webp';
 
const categories = [
  { name: 'Attars', description: 'Pure tradition in every drop', image: attars, href: '/category/attars' },
  { name: 'Perfumes', description: 'Modern fragrances for every you', image: perfumes, href: '/category/perfumes' },
  { name: 'Scented Agarbatti', description: 'Sacred scents for serene spaces', image: agarbatti, href: '/category/scented-agarbatti' },
  { name: 'Gift Hampers', description: 'Thoughtful fragrances for every occasion', image: gifts, href: '/category/gift-hampers' },
  { name: 'Room Fresheners', description: 'Lasting freshness for every corner', image: fresheners, href: '/category/room-fresheners' },
  { name: 'Bakhoors', description: 'Ancient aromas for a deeper connection', image: bakhoors, href: '/category/bakhoors' },
  { name: 'Bakhoor Burners', description: 'Tradition that elevates your space', image: burners, href: '/category/bakhoor-burners' },
  { name: 'Scented Soaps', description: 'Everyday luxury for your skin', image: soaps, href: '/category/scented-soaps' },
];
 
export default function Categories() {
  return (
    <section className={styles.section} aria-labelledby="aromas-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}><span /> Explore Our World <span /></div>
          <h2 id="aromas-heading">The House of Aromas</h2>
          <p className={styles.subtitle}>Eight Ways to Experience Extraordinary Fragrances</p>
          <p className={styles.intro}>From timeless traditions to modern indulgences, explore our curated collections for every scent experience.</p>
        </header>
        <div className={styles.grid}>
          {categories.map((item, index) => (
            <a className={styles.card} href={item.href} key={item.name} aria-label={`Explore ${item.name}`}>
              <div className={styles.imageFrame}>
                <img src={item.image} alt={`${item.name} fragrance collection`} loading="lazy" />
              </div>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className={styles.explore}>Explore <span aria-hidden="true">⟶</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
 
 