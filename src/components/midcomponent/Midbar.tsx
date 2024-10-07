import React from "react";
import "@fontsource/abril-fatface"; // Default weight 400
import styles from "./styles.module.css";
import Image from "next/image";
type Props = {};

const Midbar = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1
          style={{
            fontFamily: "var(--font-comforter-brush)",
          }}
          className={styles.heading}
        >
          Explore your travel
        </h1>
        <div>
          <p
            style={{ fontFamily: "var(--font-abril-fatface)" }}
            className={styles.trustedtravel}
          >
            Trusted Travel
          </p>
          <p
            style={{ fontFamily: "var(--font-abril-fatface)" }}
            className={styles.trustedtravel}
          >
            Agency
          </p>
        </div>
        <div className={styles.travelslang}>
          <p>
            I travel not to go anywhere, but to go. I travel for travel's sake
            the
          </p>
          <p>great affair is to move.</p>
        </div>
        <div className={styles.midbarbtn}>
          <button className={styles.midbarbtnfirst}>conatact Us</button>
          <button className={styles.midbarbtnsecond}>Learn More</button>
        </div>
      </div>
      <div className={styles.imagecontainer}>
        <Image
          src="/hero-banner.png"
          alt="hero banner"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Midbar;
