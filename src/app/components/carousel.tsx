"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ProductCard from "./product_card";
import { dummyProducts } from "../data/dummy_data";
import styles from "../styles/carousel.module.scss";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  slug: string;
}

export default function Carousel() {
  const infiniteProducts: Product[] = [
    dummyProducts[dummyProducts.length - 1],
    ...dummyProducts,
    dummyProducts[0],
    dummyProducts[1],
    dummyProducts[2],
    dummyProducts[3],
  ];

  const [index, setIndex] = useState<number>(1);
  const [transitionEnabled, setTransitionEnabled] = useState<boolean>(true);
  const itemsToShow: number = 4;
  const trackRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setIndex((prev) => prev + 1);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => prev - 1);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (index >= infiniteProducts.length - 4) {
      setTransitionEnabled(false);
      setIndex(1);
    } else if (index <= 0) {
      setTransitionEnabled(false);
      setIndex(infiniteProducts.length - 5);
    }
  }, [index, infiniteProducts.length]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  useEffect(() => {
    const trackElement = trackRef.current;
    if (trackElement) {
      trackElement.addEventListener("transitionend", handleTransitionEnd);
      return () => {
        trackElement.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, [handleTransitionEnd]);

  return (
    <div className={styles.carousel_wrapper}>
      <div>
        <button onClick={prev} className={styles.navBtn}>◀</button>
        <button onClick={next} className={styles.navBtn}>▶</button>
      </div>

      <div className={styles.carousel_container}>
        <div
          ref={trackRef}
          className={styles.carousel_track}
          style={{
            transform: `translateX(-${index * (100 / itemsToShow)}%)`,
            transition: transitionEnabled ? "transform 0.3s ease" : "none",
          }}
        >
          {infiniteProducts.map((product, i) => {
            const slot = i - index;

            // choose class based on slot
            let slotClass = styles.normalItem;
            if (slot === 0) slotClass = styles.specialItem;

            return (
              <div key={`${product.id}-${i}`} className={`${styles.carousel_item} ${slotClass}`}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
