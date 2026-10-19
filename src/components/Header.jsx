import React from 'react'
import logo from "../assets/logo.png"
import styles from './Header.module.css'
// import {
//   Search,
//   UserRound,
//   Heart,
//   ShoppingBag,
//   Menu,
// } from "lucide-react";
 


function Header() {
  return (
   <header className={styles.header}>
<div className={styles.headerInner}>
 
        {/* Logo */}
<div className={styles.logo}>
<img src={logo}></img>
</div>
 
        {/* Desktop Navigation */}
<nav className={styles.nav}>
<a href="#home">Home</a>
<a href="#collections">Collections</a>
<a href="#women">Women</a>
<a href="#men">Men</a>
<a href="#about">Our Story</a>
</nav>
 
        {/* Actions */}
<div className={styles.actions}>
 
          <button className={styles.iconButton} aria-label="Search">
{/* <Search size={19} strokeWidth={1.5} /> */}
</button>
 
          <button className={styles.iconButton} aria-label="Account">
{/* <UserRound size={19} strokeWidth={1.5} /> */}
</button>
 
          <button className={styles.iconButton} aria-label="Wishlist">
{/* <Heart size={19} strokeWidth={1.5} /> */}
</button>
 
          <button className={styles.cartButton} aria-label="Shopping bag">
{/* <ShoppingBag size={20} strokeWidth={1.5} /> */}
<span className={styles.cartCount}>2</span>
</button>
 
          <button className={styles.menuButton} aria-label="Menu">
{/* <Menu size={22} strokeWidth={1.5} /> */}
</button>
 
        </div>
 
      </div>
</header>
  )
}

export default Header