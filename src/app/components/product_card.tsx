import { Product } from "../types/product";
import Image from "next/image";
import styles from "../styles/product_card.module.scss";
import Link from "next/link";


export default function ProductCard (
    { product }: { product: Product }
    ) {
    return (
        <div className={styles.container}>
            
                <Link href={`/products/${product.slug}`}>
                <Image 
                    src={product.imageUrl} 
                    alt={product.name}
                    height={500}
                    width={400}
                    layout="responsive"
                    />      
            </Link>
            <div className={styles.card_text}>
                <p>{product.name}</p>
                <p>{product.price} kr</p>
            </div>
            
        </div>
    );
    }
