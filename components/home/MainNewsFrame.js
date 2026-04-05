import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/home.module.css";

export function MainNewsFrame() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const activeObj =
    router.pathname === "/obj1"
      ? "obj1"
      : router.pathname === "/obj2"
        ? "obj2"
        : router.pathname === "/obj3"
          ? "obj3"
          : null;

  useEffect(() => {
    const close = () => setIsMenuOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

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
                <nav
                  id="main-menu"
                  className={`${styles.menuInline} ${styles.menuMotion}`}
                  aria-label="메인 메뉴"
                >
                  <Link
                    className={styles.menuLink}
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
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
              className={`${styles.tabLink} ${styles.tab} ${styles.tabLeft} ${
                activeObj ? (activeObj === "obj1" ? styles.tabActive : styles.tabInactive) : ""
              }`}
              href="/obj1"
              data-node-id="13:8"
              aria-current={activeObj === "obj1" ? "page" : undefined}
            >
              OBJ1
            </Link>
            <Link
              className={`${styles.tabLink} ${styles.tab} ${styles.tabCenter} ${
                activeObj ? (activeObj === "obj2" ? styles.tabActive : styles.tabInactive) : ""
              }`}
              href="/obj2"
              data-node-id="13:16"
              aria-current={activeObj === "obj2" ? "page" : undefined}
            >
              OBJ2
            </Link>
            <Link
              className={`${styles.tabLink} ${styles.tab} ${styles.tabRight} ${
                activeObj ? (activeObj === "obj3" ? styles.tabActive : styles.tabInactive) : ""
              }`}
              href="/obj3"
              data-node-id="13:18"
              aria-current={activeObj === "obj3" ? "page" : undefined}
            >
              OBJ3
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

