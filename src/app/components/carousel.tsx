import ProductCard from "./product_card";
import { dummyProducts } from "../data/dummy_data";
import styles from "../styles/carousel.module.scss";

export default function Carousel() {

    return (
        <div>
                <div className={styles.carousel_container}>
                    <div className={styles.carousel_item} >
                    {dummyProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />))}
                    </div>
                </div>
               
        </div>
    )

}