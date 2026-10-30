import React, { useEffect, useState } from "react";
import { X, Minus, Plus, Trash2, Gift, TicketPercent, LockKeyhole, ArrowRight, ShoppingBag } from "lucide-react";
import styles from "./Cart.module.css";

const money = (value) => `₹${Number(value || 0).toLocaleString("en-IN")}`;

/**
 * Props:
 * open: boolean
 * onClose: () => void
 * items: [{ id, name, subtitle, image, price, mrp, quantity, badge, badgeTone }]
 * onQuantityChange: (id, nextQuantity) => void
 * onRemove: (id) => void
 * onCheckout: ({ giftWrap, giftWrapFee, couponCode, subtotal, total }) => void
 * onContinueShopping: () => void (optional)
 * onApplyCoupon: async (code, items) => { discount: number } (optional)
 * shippingFee: number (default 0)
 * giftWrapFee: number (default 99)
 */
export default function ShreeHariCart({
  open = false,
  onClose = () => {},
  items = [],
  onQuantityChange = () => {},
  onRemove = () => {},
  onCheckout = () => {},
  onContinueShopping,
  onApplyCoupon,
  shippingFee = 0,
  giftWrapFee = 99,
}) {
  const [giftWrap, setGiftWrap] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [applying, setApplying] = useState(false);

  const count = items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const subtotal = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0), 0);
  const mrpTotal = items.reduce((sum, item) => sum + Number(item.mrp ?? item.price ?? 0) * Number(item.quantity || 0), 0);
  const savings = Math.max(0, mrpTotal - subtotal);
  const finalDiscount = Math.min(discount, subtotal);
  const total = Math.max(0, subtotal - finalDiscount) + (count ? Number(shippingFee) : 0) + (giftWrap && count ? Number(giftWrapFee) : 0);

  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  // A coupon is never treated as valid unless the application validates it.
  async function handleCoupon(event) {
    event.preventDefault();
    const code = couponInput.trim();
    if (!code) return;
    if (!onApplyCoupon) {
      setCouponMessage("Coupon codes are not available yet.");
      return;
    }
    setApplying(true);
    setCouponMessage("");
    try {
      const result = await onApplyCoupon(code, items);
      const amount = Number(result?.discount);
      if (!Number.isFinite(amount) || amount < 0) throw new Error("Invalid coupon");
      setDiscount(amount);
      setAppliedCoupon(code);
      setCouponMessage("Coupon applied successfully.");
    } catch {
      setDiscount(0);
      setAppliedCoupon("");
      setCouponMessage("Coupon could not be applied.");
    } finally {
      setApplying(false);
    }
  }

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`} aria-hidden={!open}>
      <button className={styles.backdrop} type="button" onClick={onClose} tabIndex={open ? 0 : -1} aria-label="Close shopping cart" />
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label="Shopping cart" inert={!open ? true : undefined}>
        <header className={styles.header}>
          <div>
            <h2>Your Cart ({count})</h2>
            <p>A collection of scents, curated for you.</p>
            <div className={styles.flourish}><span />✦<span /></div>
          </div>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close cart"><X size={25} /></button>
        </header>

        <div className={styles.scrollArea}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <ShoppingBag size={46} strokeWidth={1.2} />
              <h3>Your fragrance journey begins here</h3>
              <p>Your cart is waiting for something wonderful.</p>
              <button type="button" onClick={onContinueShopping || onClose}>Explore fragrances <ArrowRight size={16} /></button>
            </div>
          ) : (
            <>
              <div className={styles.products}>
                {items.map((item) => (
                  <article className={styles.product} key={item.id}>
                    <div className={styles.productImage}>
                      {item.image ? <img src={item.image} alt={item.name} /> : <ShoppingBag size={32} />}
                    </div>
                    <div className={styles.productDetails}>
                      <div className={styles.productTop}>
                        <h3>{item.name}</h3>
                        <button type="button" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`} className={styles.remove}><Trash2 size={18} /></button>
                      </div>
                      <p className={styles.subtitle}>{item.subtitle}</p>
                      <div className={styles.priceRow}>
                        <strong>{money(item.price)}</strong>
                        {Number(item.mrp) > Number(item.price) && <del>{money(item.mrp)}</del>}
                      </div>
                      <div className={styles.productBottom}>
                        {item.badge ? <span className={`${styles.badge} ${item.badgeTone === "rose" ? styles.rose : item.badgeTone === "sage" ? styles.sage : ""}`}>{item.badge}</span> : <span />}
                        <div className={styles.quantity} aria-label={`Quantity for ${item.name}`}>
                          <button type="button" onClick={() => onQuantityChange(item.id, Math.max(1, Number(item.quantity) - 1))} disabled={Number(item.quantity) <= 1} aria-label={`Decrease ${item.name} quantity`}><Minus size={14} /></button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => onQuantityChange(item.id, Number(item.quantity) + 1)} aria-label={`Increase ${item.name} quantity`}><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <label className={styles.giftRow}>
                <span className={styles.giftIcon}><Gift size={27} strokeWidth={1.5} /></span>
                <span className={styles.giftCopy}><strong>Add Gift Wrapping</strong><small>Make it special with our elegant packaging.</small></span>
                <input type="checkbox" checked={giftWrap} onChange={(e) => setGiftWrap(e.target.checked)} />
                <span className={styles.giftPrice}>{money(giftWrapFee)}</span>
              </label>

              <form className={styles.couponRow} onSubmit={handleCoupon}>
                <TicketPercent size={22} />
                <input value={couponInput} onChange={(e) => setCouponInput(e.target.value)} placeholder="Enter coupon code" aria-label="Coupon code" />
                <button type="submit" disabled={applying}>{applying ? "Checking…" : "Apply"}</button>
              </form>
              {couponMessage && <p className={styles.couponMessage} role="status">{couponMessage}</p>}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.checkoutArea}>
            <div className={styles.summaryLine}><span>Subtotal ({count} items)</span><strong>{money(mrpTotal)}</strong></div>
            <div className={styles.summaryLine}><span>Product savings</span><strong className={styles.savings}>− {money(savings)}</strong></div>
            {appliedCoupon && <div className={styles.summaryLine}><span>Coupon ({appliedCoupon})</span><strong className={styles.savings}>− {money(finalDiscount)}</strong></div>}
            <div className={styles.summaryLine}><span>Shipping</span><strong>{shippingFee ? money(shippingFee) : "FREE"}</strong></div>
            {giftWrap && <div className={styles.summaryLine}><span>Gift wrapping</span><strong>{money(giftWrapFee)}</strong></div>}
            <div className={styles.summaryDivider} />
            <div className={styles.total}><span>Estimated Total</span><strong>{money(total)}</strong></div>
            <button className={styles.checkoutButton} type="button" onClick={() => onCheckout({ giftWrap, giftWrapFee: giftWrap ? giftWrapFee : 0, couponCode: appliedCoupon, subtotal, total })}>
              <LockKeyhole size={17} /> Proceed to Checkout <ArrowRight size={18} />
            </button>
            <button className={styles.continueButton} type="button" onClick={onContinueShopping || onClose}>Continue Shopping</button>
          </div>
        )}
      </aside>
    </div>
  );
}
