import React, { useState } from "react";
import {
  Truck, BadgeCheck, Leaf, Gift, Heart, ArrowRight,
  ChevronRight, Gem, Sparkles,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../assets/shree-hari-logo.webp";
import leftOrnament from "../../assets/left-ornament.webp";
import rightOrnament from "../../assets/right-ornament.webp";
import attarStillLife from "../../assets/attar-still-life.webp";

const shopLinks = [
  ["Attars (Ittar)", "/category/attars"],
  ["Perfumes", "/category/perfumes"],
  ["Scented Agarbatti", "/category/scented-agarbatti"],
  ["Gift Hampers", "/category/gift-hampers"],
  ["Room Fresheners", "/category/room-fresheners"],
  ["Bakhoors", "/category/bakhoors"],
  ["Bakhoor Burners", "/category/bakhoor-burners"],
  ["Scented Soaps", "/category/scented-soaps"],
];
const supportLinks = [
  ["Track Your Order", "/track-order"],
  ["Shipping & Delivery", "/shipping-policy"],
  ["Returns & Refunds", "/return-policy"],
  ["FAQ", "/faq"],
  ["Contact Us", "/contact"],
];
const quickLinks = [
  ["About Us", "/about"],
  ["Our Story", "/our-story"],
  ["Blog", "/blog"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
  ["Sitemap", "/sitemap"],
];
const features = [
  { Icon: Truck, title: "Pan India Delivery", detail: "Safe & Reliable" },
  { Icon: BadgeCheck, title: "Premium Quality", detail: "Authentic Fragrances" },
  { Icon: Leaf, title: "Natural Ingredients", detail: "Carefully Selected" },
  { Icon: Gift, title: "Thoughtful Gifting", detail: "For Every Occasion" },
  { Icon: Heart, title: "Customer Care", detail: "Here to Help" },
];
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/shreehari_attars?obrf=cGs4aGl3MDVvb2Zz", Icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/", Icon: FaYoutube },
  { label: "Pinterest", href: "https://www.pinterest.com/", Icon: FaPinterestP },
];

function FooterLinks({ title, links }) {
  return (
    <div className={styles.footerColumn}>
      <h3>{title}</h3>
      <div className={styles.headingLine} />
      <ul>
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href}><span>{label}</span><ChevronRight size={15} /></a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ShreeHariFooter({ onNewsletterSubscribe }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubscribe(event) {
    event.preventDefault();
    if (!onNewsletterSubscribe) {
      setMessage("Newsletter signup is coming soon.");
      return;
    }
    try {
      setSubmitting(true);
      setMessage("");
      await onNewsletterSubscribe(email.trim());
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("Subscription failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer className={styles.footer}>
      <img src={leftOrnament} alt="" aria-hidden="true" className={styles.leftOrnament} />
      <img src={rightOrnament} alt="" aria-hidden="true" className={styles.rightOrnament} />

      <div className={styles.footerMain}>
        <div className={styles.brandSection}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="Shree Hari Attar & Perfumes" className={styles.brandLogo} />
          </a>
          <div className={styles.brandDivider}><span /><Gem size={13} /><span /></div>
          <h2 className={styles.brandTagline}>Every Fragrance<br />Leaves a Memory.</h2>
          <div className={styles.brandHighlights}>
            <div><Leaf size={25} /><span>Carefully Selected</span></div>
            <div><Sparkles size={25} /><span>Beautiful Scents</span></div>
            <div><Gem size={25} /><span>Premium Quality</span></div>
          </div>
          {/* <img src={attarStillLife} alt="Luxury attar display" className={styles.brandStillLife} /> */}
        </div>

        <div className={styles.footerNavigation}>
          <FooterLinks title="Shop by Category" links={shopLinks} />
          <FooterLinks title="Customer Support" links={supportLinks} />
          <FooterLinks title="Quick Links" links={quickLinks} />
        </div>

        <div className={styles.newsletterSection}>
          <h3>Join Our Fragrance<br />Journey</h3>
          <div className={styles.headingLine} />
          <p>Subscribe to get updates on new arrivals, special offers and more.</p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" aria-label="Email address" required />
            <button type="submit" aria-label="Subscribe to newsletter" disabled={submitting}>
              <ArrowRight size={20} />
            </button>
          </form>
          {message && <p role="status">{message}</p>}
          <h4 className={styles.followTitle}>Follow Us</h4>
          <div className={styles.socialIcons}>
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={18} /></a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footerBenefits}>
        {features.map(({ Icon, title, detail }) => (
          <div className={styles.benefitItem} key={title}>
            <div className={styles.benefitIcon}><Icon size={25} strokeWidth={1.5} /></div>
            <div className={styles.benefitText}><h4>{title}</h4><p>{detail}</p></div>
          </div>
        ))}
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Shree Hari Attar & Perfumes. All rights reserved.</p>
        <div className={styles.paymentMethods}>
          <span>We Accept</span>
          <div className={styles.paymentIcons}><span>VISA</span><span>Mastercard</span><span>UPI</span><span>RuPay</span></div>
        </div>
      </div>
    </footer>
  );
}

