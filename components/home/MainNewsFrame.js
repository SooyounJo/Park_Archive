import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/home.module.css";

export function MainNewsFrame() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.frame} data-node-id="2:24">
      <section className={styles.section} data-name="news" data-node-id="2:25">
        <div className={styles.padX} data-name="section-header" data-node-id="2:38">
          <div className={styles.headerArea}>
            <div
              className={`${styles.titleRow} ${isMenuOpen ? styles.titleRowOpen : ""}`}
              data-name="page title"
              data-node-id="2:39"
            >
              <button
                type="button"
                className={`${styles.iconButton} ${isMenuOpen ? styles.iconButtonOpen : ""}`}
                aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
                aria-expanded={isMenuOpen}
                aria-controls="main-menu"
                onClick={() => setIsMenuOpen((v) => !v)}
              >
                <span className={styles.burger} aria-hidden="true">
                  <span className={styles.burgerLine} />
                  <span className={styles.burgerLine} />
                  <span className={styles.burgerLine} />
                </span>
                <span className={styles.srOnly}>메뉴</span>
              </button>

              {isMenuOpen ? (
                <nav id="main-menu" className={styles.menuInline} aria-label="메인 메뉴">
                  <Link
                    className={styles.menuLink}
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                  <Link
                    className={styles.menuLink}
                    href="/obj1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WORK
                  </Link>
                </nav>
              ) : (
                <Link href="/" className={styles.brand} onClick={() => setIsMenuOpen(false)}>
                  <h1 className={styles.title} data-node-id="2:40">
                    PARKSIO
                  </h1>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className={styles.spacer} />

        <div className={styles.padX} data-name="page title" data-node-id="13:7">
          <div className={styles.tabsRow}>
            <Link
              className={`${styles.tabLink} ${styles.tab} ${styles.tabLeft}`}
              href="/obj1"
              data-node-id="13:8"
            >
              OBJ1
            </Link>
            <Link
              className={`${styles.tabLink} ${styles.tab} ${styles.tabCenter}`}
              href="/obj2"
              data-node-id="13:16"
            >
              OBJ2
            </Link>
            <Link
              className={`${styles.tabLink} ${styles.tab} ${styles.tabRight}`}
              href="/obj3"
              data-node-id="13:18"
            >
              OBJ3
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

