import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  { label: "Attars (Ittar)", path: "/category/attars" },
  { label: "Perfumes", path: "/category/perfumes" },
  { label: "Scented Agarbatti", path: "/category/scented-agarbatti" },
  { label: "Gift Hampers", path: "/category/gift-hampers" },
  { label: "Room Fresheners", path: "/category/room-fresheners" },
  { label: "Bakhoors", path: "/category/bakhoors" },
  { label: "Bakhoor Burners", path: "/category/bakhoor-burners" },
  { label: "Scented Soaps", path: "/category/scented-soaps" },
];
const supportLinks = [
  { label: "Track Your Order", path: "/track-order" },
  { label: "Shipping & Delivery", path: "/shipping-policy" },
  { label: "Returns & Refunds", path: "/return-policy" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];
const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Our Story", path: "/our-story" },
  { label: "Blog", path: "/blog" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
  { label: "Sitemap", path: "/sitemap" },
];
const features = [
  { icon: Truck, title: "Pan India Delivery", description: "Safe & Reliable" },
  { icon: BadgeCheck, title: "Premium Quality", description: "Authentic Fragrances" },
  { icon: Leaf, title: "Natural Ingredients", description: "Carefully Selected" },
  { icon: Gift, title: "Thoughtful Gifting", description: "For Every Occasion" },
  { icon: Heart, title: "Customer Care", description: "Here to Help" },
];
const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/", icon: FaInstagram },
  { name: "Facebook", url: "https://www.facebook.com/", icon: FaFacebookF },
  { name: "YouTube", url: "https://www.youtube.com/", icon: FaYoutube },
  { name: "Pinterest", url: "https://www.pinterest.com/", icon: FaPinterestP },
];

function FooterLinks({ title, links }) {
  return (
    <div className={styles.footerColumn}>
      <h3>{title}</h3>
      <div className={styles.headingLine} />
      <ul>
        {links.map((item) => (
          <li key={item.path}>
            <Link to={item.path}><span>{item.label}</span><ChevronRight size={15} /></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ShreeHariFooter({ onNewsletterSubscribe }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const year = new Date().getFullYear();

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }
    if (!onNewsletterSubscribe) {
      setMessage("Newsletter subscription is not available yet.");
      return;
    }
    try {
      await onNewsletterSubscribe(email.trim());
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch {
      setMessage("Unable to subscribe. Please try again.");
    }
  }

  return (
    <footer className={styles.footer}>
      <img src={leftOrnament} alt="" aria-hidden="true" className={styles.leftOrnament} />
      <img src={rightOrnament} alt="" aria-hidden="true" className={styles.rightOrnament} />
      <div className={styles.footerMain}>
        <div className={styles.brandSection}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="Shree Hari Attar & Perfumes" className={styles.brandLogo} />
          </Link>
          <div className={styles.brandDivider}><span /><Gem size={13} /><span /></div>
          <h2 className={styles.brandTagline}>Every Fragrance<br />Leaves a Memory.</h2>
          <div className={styles.brandHighlights}>
            <div><Leaf size={25} /><span>Carefully Selected</span></div>
            <div><Sparkles size={25} /><span>Beautiful Scents</span></div>
            <div><Gem size={25} /><span>Premium Quality</span></div>
          </div>
          <img src={attarStillLife} alt="Luxury attar fragrance display" className={styles.brandStillLife} />
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
            <button type="submit" aria-label="Subscribe to newsletter"><ArrowRight size={20} /></button>
          </form>
          {message && <p aria-live="polite">{message}</p>}
          <h4 className={styles.followTitle}>Follow Us</h4>
          <div className={styles.socialIcons}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerBenefits}>
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div className={styles.benefitItem} key={feature.title}>
              <div className={styles.benefitIcon}><Icon size={25} strokeWidth={1.5} /></div>
              <div className={styles.benefitText}><h4>{feature.title}</h4><p>{feature.description}</p></div>
            </div>
          );
        })}
      </div>
      <div className={styles.footerBottom}>
        <p>© {year} Shree Hari Attar & Perfumes. All rights reserved.</p>
        <div className={styles.paymentMethods}>
          <span>We Accept</span>
          <div className={styles.paymentIcons}><span>VISA</span><span>Mastercard</span><span>UPI</span><span>RuPay</span></div>
        </div>
      </div>
    </footer>
  );
}
