

import React from "react";
 
import logo from "../assets/logo.png";

import styles from "./Header.module.css";
 
import {

  Search,

  UserRound,

  Heart,

  ShoppingBag,

  Menu,

} from "lucide-react";
 
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";
 
function Header() {

  const {

    cartCount,

    setCartOpen,

  } = useCart();
 
  return (
<header className={styles.header}>
<div className={styles.headerInner}>
 
        {/* Logo */}
<div className={styles.logo}>
<Link to="/">
<img src={logo} alt="Shree Hari Attar & Perfumes" />
</Link>
</div>
 
        {/* Desktop Navigation */}
<nav className={styles.nav}>
<Link to="/">Home</Link>
 
          <Link to="/products">

            Collections
</Link>
 
          <a href="#women">Women</a>
<a href="#men">Men</a>
<a href="#about">Our Story</a>
</nav>
 
        {/* Actions */}
<div className={styles.actions}>
 
          <button

            type="button"

            className={styles.iconButton}

            aria-label="Search"
>
<Search size={19} strokeWidth={1.5} />
</button>
 
          <button

            type="button"

            className={styles.iconButton}

            aria-label="Account"
>
<UserRound size={19} strokeWidth={1.5} />
</button>
 
          <button

            type="button"

            className={styles.iconButton}

            aria-label="Wishlist"
>
<Heart size={19} strokeWidth={1.5} />
</button>
 
          {/* Cart Button */}
<button

            type="button"

            onClick={() => setCartOpen(true)}

            className={styles.cartButton}

            aria-label={`Shopping bag, ${cartCount} items`}
>
<ShoppingBag size={20} strokeWidth={1.5} />
 
            <span className={styles.cartCount}>

              {cartCount}
</span>
</button>
 
          {/* Mobile Menu */}
<button

            type="button"

            className={styles.menuButton}

            aria-label="Menu"
>
<Menu size={22} strokeWidth={1.5} />
</button>
 
        </div>
</div>
</header>

  );

}
 
export default Header;

 