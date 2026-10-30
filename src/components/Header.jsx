import React from 'react'
import logo from "../assets/logo.png"
import styles from './Header.module.css'
import ShreeHariCart from './Cart/Cart';
import { useState } from 'react';

 import {
   Search,
   UserRound,
   Heart,
  ShoppingBag,
  Menu,
} from "lucide-react";
import { Link } from 'react-router-dom';


const initialItems = [
  { id: 1, name: "Oudh Royal Attar", subtitle: "12ml | Pure & Alcohol Free", image: "/images/oudh-attar.webp", price: 1499, mrp: 1799, quantity: 1, badge: "Bestseller" },
  { id: 2, name: "Rose Musk Perfume", subtitle: "50ml | Long Lasting", image: "/images/rose-musk.webp", price: 1099, mrp: 1299, quantity: 2, badge: "Trending", badgeTone: "rose" },
  { id: 3, name: "Sandalwood Agarbatti", subtitle: "Pack of 100 Sticks", image: "/images/sandalwood.webp", price: 299, mrp: 349, quantity: 1, badge: "Natural Ingredients", badgeTone: "sage" },
];
 
 


function Header() {
        const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initialItems);
 
  function updateQuantity(id, quantity) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity } : item));
  }
 
  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }
 
 
  return (
   <header className={styles.header}>
<div className={styles.headerInner}>
 
        {/* Logo */}
<div className={styles.logo}>
<img src={logo}></img>
</div>
 
        {/* Desktop Navigation */}
<nav className={styles.nav}>
<Link to='/'><a href="#home">Home</a></Link>
<Link to="products">
<a href="#collections">Collections</a>
</Link>
<a href="#women">Women</a>
<a href="#men">Men</a>
<a href="#about">Our Story</a>
</nav>
 
        {/* Actions */}
<div className={styles.actions}>
 
          <button className={styles.iconButton} aria-label="Search">
<Search size={19} strokeWidth={1.5} />
</button>
 
          <button className={styles.iconButton} aria-label="Account">
<UserRound size={19} strokeWidth={1.5} />
</button>
 
          <button className={styles.iconButton} aria-label="Wishlist">
<Heart size={19} strokeWidth={1.5} />
</button>
 
          <button 
          onClick={()=>{
                setOpen(true)
          }}
            className={styles.cartButton} aria-label="Shopping bag">
<ShoppingBag size={20} strokeWidth={1.5} />
<span className={styles.cartCount}>2</span>
</button>

  <ShreeHariCart
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        onQuantityChange={updateQuantity}
        onRemove={removeItem}
        onContinueShopping={() => setOpen(false)}
        onCheckout={(order) => {
          // Replace with your actual checkout modal or navigation.
          console.log("Checkout details:", order);
          setOpen(false);
        }}
      />
 
 
          <button className={styles.menuButton} aria-label="Menu">
<Menu size={22} strokeWidth={1.5} />
</button>
 
        </div>
 
      </div>
</header>
  )
}

export default Header