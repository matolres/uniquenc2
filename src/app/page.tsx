import styles from "../app/styles/page.module.scss";
import Image from "next/image";
import Header from "./components/header";
import { dummyProducts } from "./data/dummy_data";
import ProductCard from "./components/product_card";
import Carousel from "./components/carousel";

export default function Home() {
  const latest_product = dummyProducts[2];
  return (
    <>
    <Header />
    <div className={styles.page}>
      <div className={styles.hero}>
        <Image 
          alt="frontpage picture"
          src={"/hero.png "}
          fill={true}
        />
        <div className={styles.cta_button}>
          <h2>choose uniqueness</h2>
        </div>
      </div>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.grid1}>
            <p className={styles.grid1_text}>unique-nc presents creations made one at a time, where every brushstroke is a testament to singular artistry and timeless individuality.</p>
            <p>latest release</p>
          </div>
          <div className={styles.grid2}>
            <div className={styles.latest_release}>
              <ProductCard product={latest_product} />
            </div>
            <div></div>
          </div>
          <div className={styles.grid1}>
            <p className={styles.grid1_text}>make a bold statement with clothing that is as unique as your are. Welcome to a realm where fashion becomes a canvas and every piece tells a story.</p>
            <button>explore our lookbook</button>
          </div>
          <div className={styles.grid4}>
            <h1 className={styles.mood_title}>dare to be unique</h1>
            <Image 
            alt="mood image"
            src={"/mood.png"}
            height={700}
            width={1000}
            layout="responsive"
            />
          </div>

        </section>
        <section>
          <Carousel />
        </section>
        
      </main>
    </div>
    </>
  );
}
