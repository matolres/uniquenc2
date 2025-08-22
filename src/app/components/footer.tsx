import styles from "../styles/footer.module.scss";
export default function Footer(){
    return (
        <footer className={styles.container}>
        <div>
            <p>© 2023 Unique-NC. All rights reserved.</p>
            <p>Follow us on social media!</p>
        </div>
        </footer>
    );
}