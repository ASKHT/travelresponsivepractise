import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Thirdcomponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headings}>
        <h1
          style={{ fontFamily: "var(--font-comforter-brush)" }}
          className={styles.headingone}
        >
          Destinations
        </h1>
        <h1
          style={{ fontFamily: "var(--font-abril-fatface)" }}
          className={styles.headingtwo}
        >
          Choose Your Place
        </h1>
      </div>
      <div className={styles.imagewrappercontainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/blog-2.jpg"
            alt="Woman riding bicycle on overwater walkway in Maldives"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <p
              className={styles.location}
              style={{
                fontFamily: "var(--font-comforter-brush)",
                fontSize: "1.5rem",
              }}
            >
              Male
            </p>
            <h2 className={styles.destination}>Maldives</h2>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/blog-3.jpg"
            alt="Woman in patterned dress sitting on railing overlooking water bungalows in Thailand"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <p
              className={styles.location}
              style={{
                fontFamily: "var(--font-comforter-brush)",
                fontSize: "1.5rem",
              }}
            >
              Bangkok
            </p>
            <h2 className={styles.destination}>Thailand</h2>
          </div>
        </div>
      </div>
      <div className={styles.imagewrappercontainer}>
        <div className={styles.imageWrapperone}>
          <Image
            src="/blog-2.jpg"
            alt="Woman riding bicycle on overwater walkway in Maldives"
            layout="fill"
            objectFit="cover"
            className={styles.imageone}
          />
          <div className={styles.overlay}>
            <p
              className={styles.locationone}
              style={{
                fontFamily: "var(--font-comforter-brush)",
                fontSize: "1.5rem",
              }}
            >
              Male
            </p>
            <h2 className={styles.destinationone}>Maldives</h2>
          </div>
        </div>
        <div className={styles.imageWrapperone}>
          <Image
            src="/blog-3.jpg"
            alt="Woman in patterned dress sitting on railing overlooking water bungalows in Thailand"
            layout="fill"
            objectFit="cover"
            className={styles.imageone}
          />
          <div className={styles.overlayone}>
            <p
              className={styles.locationone}
              style={{
                fontFamily: "var(--font-comforter-brush)",
                fontSize: "1.5rem",
              }}
            >
              Bangkok
            </p>
            <h2 className={styles.destinationone}>Thailand</h2>
          </div>
        </div>
        <div className={styles.imageWrapperone}>
          <Image
            src="/hero-banner.png"
            alt="Woman in patterned dress sitting on railing overlooking water bungalows in Thailand"
            layout="fill"
            objectFit="cover"
            className={styles.imageone}
          />
          <div className={styles.overlayone}>
            <p
              className={styles.locationone}
              style={{
                fontFamily: "var(--font-comforter-brush)",
                fontSize: "1.5rem",
              }}
            >
              Bangkok
            </p>
            <h2 className={styles.destinationone}>Thailand</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdcomponent;
