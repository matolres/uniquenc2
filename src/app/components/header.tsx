import Link from 'next/link'
import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}><Link href="/" className={styles.item_link}><h2>unique-nc</h2></Link></div>
        <ul className={styles.menu_items_container}>
          <li className={styles.menu_item}><Link href="/about" className={styles.item_link}>creations</Link></li>
          <li className={styles.menu_item}><Link href="/contact" className={styles.item_link}>about</Link></li>
          <li className={styles.menu_item}><Link href="/contact" className={styles.item_link}>lookbook</Link></li>
          <li className={styles.menu_item}><Link href="/contact" className={styles.item_link}>process</Link></li>
          <li className={styles.menu_item}><Link href="/contact" className={styles.item_link}>bag</Link></li>
        </ul>
      </nav>
    </header>
  );
}