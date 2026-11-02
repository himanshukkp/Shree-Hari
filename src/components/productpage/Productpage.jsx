import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BadgeCheck, ChevronDown, ChevronLeft, ChevronRight, Heart,
  Leaf, Minus, Plus, Search, ShieldCheck, ShoppingBag,
  Star, Timer, Truck, X, ZoomIn,
} from "lucide-react";
import styles from "./Productpage.module.css";

// Keep these filenames identical to those in your src/assets folder.
import gucci from "../../assets/gucci_flora.webp";
import bombshell from "../../assets/bomshell.webp";
import br540 from "../../assets/br_540.webp";
import ysl from "../../assets/ysl_libre.webp";
import dior from "../../assets/dior_sauvage.webp";
import rebel from "../../assets/afnan_rebel.webp";
import tonka from "../../assets/arabian_tonka.webp";
import afgano from "../../assets/black_afgano.webp";
import channel from "../../assets/blue_de_channel.webp";
import godfather from "../../assets/god_father.webp";
import lovedrop from "../../assets/love_drop.webp";
import lv from "../../assets/lv_imagination.webp";
import ombre from "../../assets/ombre_nomade.webp";
import marj from "../../assets/saudi_marj.webp";
import hawas from "../../assets/hawas_tropical.webp";
import oudMaracuja from "../../assets/oud_maracuja.webp";
import creed from "../../assets/creed_aventus.webp";
import jannat from "../../assets/jannat_e_zuhur.webp";
import afnan9pm from "../../assets/afnan_rebel_9pm.webp";
import musk from "../../assets/musk_rijali.webp";

// Demo catalog. Replace prices, sizes, stock, notes and descriptions with real product data.
const catalog = [
  { id: 1, name: "Gucci Flora", image: gucci, family: "Floral · Elegant · Long Lasting", description: "A graceful floral fragrance with fresh blossoms and delicate musk, made for everyday elegance.", top: "Citrus, Bergamot", heart: "Peony, Rose, Jasmine", base: "Musk, Vanilla, Cedarwood" },
  { id: 2, name: "Bombshell", image: bombshell, family: "Fruity · Floral · Radiant" },
  { id: 3, name: "BR.540", image: br540, family: "Amber · Warm · Sophisticated" },
  { id: 4, name: "YSL Libre", image: ysl, family: "Floral · Bold · Elegant" },
  { id: 5, name: "Dior Sauvage", image: dior, family: "Fresh · Spicy · Woody" },
  { id: 6, name: "Afnan Rebel", image: rebel, family: "Fresh · Vibrant · Modern" },
  { id: 7, name: "Arabian Tonka", image: tonka, family: "Warm · Sweet · Oriental" },
  { id: 8, name: "Black Afgano", image: afgano, family: "Dark · Woody · Intense" },
  { id: 9, name: "Blue de Channel", image: channel, family: "Fresh · Woody · Refined" },
  { id: 10, name: "God Father", image: godfather, family: "Woody · Warm · Bold" },
  { id: 11, name: "Love Drop", image: lovedrop, family: "Sweet · Romantic · Rich" },
  { id: 12, name: "LV Imagination", image: lv, family: "Fresh · Citrus · Airy" },
  { id: 13, name: "Ombre Nomade", image: ombre, family: "Oud · Amber · Deep" },
  { id: 14, name: "Saudi Marj", image: marj, family: "Woody · Oriental · Rich" },
  { id: 15, name: "Hawas Tropical", image: hawas, family: "Tropical · Fresh · Green" },
  { id: 16, name: "Oud Maracuja", image: oudMaracuja, family: "Oud · Fruity · Intense" },
  { id: 17, name: "Creed Aventus", image: creed, family: "Fruity · Smoky · Woody" },
  { id: 18, name: "Jannat E Zuhur", image: jannat, family: "Floral · Woody · Warm" },
  { id: 19, name: "Afnan Rebel 9PM", image: afnan9pm, family: "Sweet · Fresh · Evening" },
  { id: 20, name: "Musk Rijali", image: musk, family: "Clean · Musky · Soft" },
].map((product) => ({
  price: 1300,
  mrp: 1799,
  sizes: ["100 ml", "50 ml", "30 ml"],
  ...product,
}));

const rupees = (value) => `₹${Number(value).toLocaleString("en-IN")}`;

export default function Product({ onAddToCart, onWishlistToggle }) {
  const { id } = useParams();
  const product = useMemo(() => catalog.find((item) => String(item.id) === String(id)) || catalog[0], [id]);
  const [selectedSize, setSelectedSize] = useState("100 ml");
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  // The same source photo is reused in the gallery until separate detail photos exist.
  const gallery = [product.image];
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = catalog.filter((item) => item.id !== product.id).slice(0, 4);

  function addToCart(item = product, amount = quantity) {
    if (typeof onAddToCart === "function") {
      onAddToCart({ ...item, selectedSize: item.id === product.id ? selectedSize : "100 ml", quantity: amount });
    } else {
      setCartMessage("Connect onAddToCart to your cart drawer to add products.");
    }
  }

  function toggleWishlist() {
    const next = !wishlisted;
    setWishlisted(next);
    onWishlistToggle?.(product, next);
  }

  return (
    <main className={styles.page}>
      <div className={styles.benefitStrip}>
        <span><Truck size={19} /> Pan India Delivery</span>
        <i />
        <span><BadgeCheck size={19} /> Premium Quality</span>
        <i />
        <span><ShieldCheck size={19} /> Secure Payment</span>
        <i />
        <span><Leaf size={19} /> Quality Fragrances</span>
      </div>

      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link><ChevronRight size={14} />
          <Link to="/products">Perfumes</Link><ChevronRight size={14} />
          <span>{product.name}</span>
        </div>

        <section className={styles.productLayout}>
          <div className={styles.gallery}>
            <div className={styles.thumbnailRail}>
              {gallery.map((src, index) => (
                <button key={index} className={`${styles.thumb} ${activeImage === index ? styles.thumbActive : ""}`} onClick={() => setActiveImage(index)} aria-label={`View image ${index + 1}`}>
                  <img src={src} alt={`${product.name} thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
            <div className={styles.mainPhoto}>
              <img src={gallery[activeImage]} alt={`${product.name} perfume by Shree Hari`} />
              <button className={styles.zoomButton} onClick={() => setZoomOpen(true)} aria-label="Enlarge perfume image"><ZoomIn size={21} /></button>
            </div>
          </div>

          <div className={styles.productInfo}>
            <span className={styles.collectionLabel}>♛ &nbsp; THE SIGNATURE COLLECTION</span>
            <h1>{product.name}</h1>
            <p className={styles.family}>{product.family}</p>
            <div className={styles.rating}><span aria-label="5 decorative stars">★★★★★</span><small>Signature Fragrance</small></div>
            <div className={styles.priceLine}>
              <strong>{rupees(product.price)}</strong>
              <del>{rupees(product.mrp)}</del>
              <span className={styles.discount}>{discount}% OFF</span>
            </div>
            <p className={styles.description}>{product.description || `Discover ${product.name}, a distinctive fragrance crafted to elevate everyday moments.`}</p>
            <div className={styles.sizeRow}>
              <span className={styles.fieldLabel}>Size:</span>
              {product.sizes.map((size) => <button key={size} onClick={() => setSelectedSize(size)} className={`${styles.sizeButton} ${selectedSize === size ? styles.sizeActive : ""}`}>{size}</button>)}
            </div>
            <div className={styles.quantityRow}>
              <span className={styles.fieldLabel}>Quantity:</span>
              <div className={styles.quantityControl}>
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"><Minus size={16} /></button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => Math.min(20, q + 1))} aria-label="Increase quantity"><Plus size={16} /></button>
              </div>
            </div>
            <div className={styles.actions}>
              <button className={styles.addButton} onClick={() => addToCart()}><ShoppingBag size={22} /> Add to Cart</button>
              <button className={`${styles.wishlistButton} ${wishlisted ? styles.wishlisted : ""}`} onClick={toggleWishlist} aria-pressed={wishlisted}>
                <Heart size={21} fill={wishlisted ? "currentColor" : "none"} /> {wishlisted ? "Wishlisted" : "Add to Wishlist"}
              </button>
            </div>
            {cartMessage && <p className={styles.cartMessage} role="status">{cartMessage}</p>}
          </div>

          <aside className={styles.trustPanel}>
            <div><Timer /><p><strong>Beautifully Crafted</strong><span>Made for memorable moments</span></p></div>
            <div><BadgeCheck /><p><strong>Premium Quality</strong><span>Carefully selected fragrances</span></p></div>
            <div><ShieldCheck /><p><strong>Secure Payment</strong><span>Protected checkout</span></p></div>
            <div><Truck /><p><strong>Pan India Delivery</strong><span>Delivered across India</span></p></div>
          </aside>
        </section>

        <section className={styles.notes} aria-label="Fragrance notes">
          <div className={styles.notesIntro}><h2>Fragrance Notes</h2><p>A beautiful harmony of fresh florals and warm, sensual tones.</p></div>
          <div className={styles.note}><span className={styles.noteEmoji}>🍋</span><h3>Top Notes</h3><p>{product.top || "Fresh opening notes"}</p></div>
          <div className={styles.note}><span className={styles.noteEmoji}>🌹</span><h3>Heart Notes</h3><p>{product.heart || "The fragrance's signature heart"}</p></div>
          <div className={styles.note}><span className={styles.noteEmoji}>🌼</span><h3>Base Notes</h3><p>{product.base || "Warm, lasting base notes"}</p></div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.sectionTitle}><span /> <h2>You May Also Love</h2> <span /></div>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <article className={styles.relatedCard} key={item.id}>
                <Link to={`/product/${item.id}`} className={styles.relatedImage}><img src={item.image} alt={item.name} /></Link>
                <div className={styles.relatedDetails}>
                  <Link to={`/product/${item.id}`}><h3>{item.name}</h3></Link>
                  <small>Signature Collection</small>
                  <div className={styles.relatedPrice}><strong>{rupees(item.price)}</strong><del>{rupees(item.mrp)}</del></div>
                </div>
                <button className={styles.relatedCart} aria-label={`Add ${item.name} to cart`} onClick={() => addToCart(item, 1)}><ShoppingBag size={18} /></button>
              </article>
            ))}
          </div>
        </section>
      </div>

      {zoomOpen && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Product image enlarged" onClick={() => setZoomOpen(false)}>
        <button className={styles.closeZoom} onClick={() => setZoomOpen(false)} aria-label="Close image"><X size={26} /></button>
        <img src={gallery[activeImage]} alt={product.name} onClick={(e) => e.stopPropagation()} />
      </div>}
    </main>
  );
}
