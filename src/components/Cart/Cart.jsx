

import React, { useEffect } from "react";

import {

  X,

  ShoppingBag,

  Trash2,

  Minus,

  Plus,

  Truck,

  LockKeyhole,

  ArrowRight,

  ShoppingCart,

} from "lucide-react";
 
import styles from "./Cart.module.css";
 
function ShreeHariCart({

  open = false,

  onClose = () => {},

  items = [],

  onQuantityChange = () => {},

  onRemove = () => {},

  onCheckout = () => {},

  onContinueShopping,

  shippingFee = 0,

}) {

  const formatPrice = (price) =>

    new Intl.NumberFormat("en-IN", {

      style: "currency",

      currency: "INR",

      maximumFractionDigits: 0,

    }).format(price);
 
  const cartCount = items.reduce(

    (total, item) => total + (Number(item.quantity) || 0),

    0

  );
 
  const subtotal = items.reduce(

    (total, item) =>

      total +

      Number(item.price || 0) * Number(item.quantity || 0),

    0

  );
 
  const mrpTotal = items.reduce(

    (total, item) =>

      total +

      Number(item.mrp || item.price || 0) *

        Number(item.quantity || 0),

    0

  );
 
  const savings = Math.max(0, mrpTotal - subtotal);
 
  const total = subtotal + Number(shippingFee || 0);
 
  useEffect(() => {

    if (!open) return;
 
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
 
    const handleEscape = (event) => {

      if (event.key === "Escape") onClose();

    };
 
    window.addEventListener("keydown", handleEscape);
 
    return () => {

      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);

    };

  }, [open, onClose]);
 
  const handleContinueShopping = () => {

    if (onContinueShopping) {

      onContinueShopping();

    } else {

      onClose();

    }

  };
 
  return (
<>
<div

        className={`${styles.overlay} ${

          open ? styles.overlayVisible : ""

        }`}

        onClick={onClose}

        aria-hidden="true"

      />
 
      <aside

        className={`${styles.cartDrawer} ${

          open ? styles.cartOpen : ""

        }`}

        role="dialog"

        aria-modal={open ? "true" : undefined}

        aria-label="Shopping bag"

        aria-hidden={!open}

        inert={!open ? true : undefined}
>

        {/* Header */}
<div className={styles.cartHeader}>
<div className={styles.headerContent}>
<div className={styles.headingRow}>
<ShoppingBag

                size={25}

                strokeWidth={1.5}

                className={styles.bagIcon}

              />
 
              <h2>

                Your Bag <span>({cartCount})</span>
</h2>
</div>
 
            <p>A collection of your selected fragrances</p>
</div>
 
          <button

            type="button"

            className={styles.closeButton}

            onClick={onClose}

            aria-label="Close cart"
>
<X size={23} strokeWidth={1.6} />
</button>
</div>
 
        <div className={styles.goldDivider}>
<span>✦</span>
</div>
 
        {/* Cart Content */}

        {items.length === 0 ? (
<div className={styles.emptyCart}>
<div className={styles.emptyIcon}>
<ShoppingBag size={47} strokeWidth={1.1} />
</div>
 
            <h3>Your bag is empty</h3>
 
            <p>

              Discover a fragrance that makes every moment

              unforgettable.
</p>
 
            <button

              type="button"

              className={styles.emptyShopButton}

              onClick={handleContinueShopping}
>

              Explore Fragrances
<ArrowRight size={17} />
</button>
</div>

        ) : (
<>
<div className={styles.cartBody}>

              {/* Products */}
<div className={styles.productsList}>

                {items.map((item) => (
<div className={styles.cartItem} key={item.id}>
<div className={styles.productImage}>
<img

                        src={item.image}

                        alt={item.name}

                      />
</div>
 
                    <div className={styles.productDetails}>
<div className={styles.productTop}>
<div>
<h3>{item.name}</h3>
 
                          <p className={styles.productSubtitle}>

                            {item.subtitle || "Eau de Parfum"}
</p>
 
                          {item.size && (
<p className={styles.productSize}>

                              {item.size}
</p>

                          )}
</div>
 
                        <button

                          type="button"

                          className={styles.removeButton}

                          onClick={() => onRemove(item.id)}

                          aria-label={`Remove ${item.name}`}
>
<Trash2 size={18} strokeWidth={1.6} />
</button>
</div>
 
                      <div className={styles.productBottom}>
<div className={styles.priceArea}>
<span className={styles.salePrice}>

                            {formatPrice(item.price)}
</span>
 
                          {Number(item.mrp) > Number(item.price) && (
<span className={styles.mrp}>

                              {formatPrice(item.mrp)}
</span>

                          )}
</div>
 
                        <div className={styles.quantityControl}>
<button

                            type="button"

                            onClick={() => {

                              if (item.quantity <= 1) {

                                onRemove(item.id);

                              } else {

                                onQuantityChange(

                                  item.id,

                                  item.quantity - 1

                                );

                              }

                            }}

                            aria-label={`Decrease ${item.name} quantity`}
>
<Minus size={14} />
</button>
 
                          <span>{item.quantity}</span>
 
                          <button

                            type="button"

                            onClick={() =>

                              onQuantityChange(

                                item.id,

                                item.quantity + 1

                              )

                            }

                            aria-label={`Increase ${item.name} quantity`}
>
<Plus size={14} />
</button>
</div>
</div>
 
                      {item.badge && (
<div className={styles.productBadge}>

                          ✦ {item.badge}
</div>

                      )}
</div>
</div>

                ))}
</div>
 
              {/* Shipping Message */}
<div className={styles.shippingMessage}>
<Truck size={21} strokeWidth={1.6} />
 
                <span>

                  {shippingFee === 0

                    ? "Shipping is free on your order"

                    : `Shipping: ${formatPrice(shippingFee)}`}
</span>
</div>
</div>
 
            {/* Fixed Bottom */}
<div className={styles.cartFooter}>
<div className={styles.summaryRow}>
<span>Subtotal ({cartCount} items)</span>
 
                <strong>{formatPrice(subtotal)}</strong>
</div>
 
              {savings > 0 && (
<div className={styles.savingsRow}>
<span>You save</span>
<strong>− {formatPrice(savings)}</strong>
</div>

              )}
 
              {shippingFee > 0 && (
<div className={styles.summaryRow}>
<span>Shipping</span>
<strong>{formatPrice(shippingFee)}</strong>
</div>

              )}
 
              <div className={styles.totalRow}>
<span>Total</span>
<strong>{formatPrice(total)}</strong>
</div>
 
              <button

                type="button"

                className={styles.checkoutButton}

                onClick={() =>

                  onCheckout({

                    items,

                    subtotal,

                    savings,

                    shippingFee,

                    total,

                  })

                }
>
<LockKeyhole size={18} strokeWidth={1.7} />

                Proceed to Checkout
<ArrowRight size={19} />
</button>
 
              <button

                type="button"

                className={styles.continueButton}

                onClick={handleContinueShopping}
>

                Continue Shopping
</button>
 
              <div className={styles.secureText}>
<LockKeyhole size={12} />

                Secure & protected checkout
</div>
</div>
</>

        )}
</aside>
</>

  );

}
 
export default ShreeHariCart;

 