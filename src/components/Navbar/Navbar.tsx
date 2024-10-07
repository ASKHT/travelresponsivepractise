// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Tourest</Link>
      </div>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navItems}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/tours">Tours</Link>
          </li>
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <button className={styles.bookingButton}>Booking Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
