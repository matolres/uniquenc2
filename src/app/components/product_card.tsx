import { Product } from "../types/product";
import Image from "next/image";
import styles from "../styles/product_card.module.scss";
import Link from "next/link";


export default function ProductCard (
    { product }: { product: Product }
    ) {
    return (
        <div className={styles.container}>
            
                <Link href={`/products/${product.slug}`} className={styles.link}>
        <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: 'contain' }} // or "contain" to preserve full aspect ratio
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             
        
        /> 
        
   
            </Link>
            <div className={styles.card_text}>
                <p>{product.name}</p>
                <p>{product.price} kr</p>
                <p>{product.id}</p>
            </div>
            
        </div>
    );
    }
