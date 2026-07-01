import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.name}>Hina Mehboob</span>
          <p className={styles.tagline}>Full-stack AI Engineer</p>
        </div>

        <div className={styles.rightSide}>
          <p className={styles.copy}>
            &copy; {currentYear} Hina Mehboob. All rights reserved.
          </p>
          <a href="#" className={styles.topBtn} aria-label="Scroll back to top">
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
