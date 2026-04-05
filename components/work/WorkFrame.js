import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "@/styles/work.module.css";

const DEFAULT_BODY = [
  "I’m interested in creating products that are not only visually refined, but also intuitive, adaptive, and meaningful over time. To me, good design is something that reveals itself gradually—something that users come to understand, trust, and form a relationship with.",
  "Ultimately, I aim to design objects that feel less like tools and more like companions—quietly supporting everyday life while continuously evolving with the user.",
];

export function WorkFrame({
  obj = "OBJ1",
  meta = "2025 / CMF : / NAME",
  body = DEFAULT_BODY,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bodyLines = useMemo(() => {
    const parts = Array.isArray(body) ? body : [String(body)];
    return parts.flatMap((p, i) => (i === 0 ? [p] : ["", p]));
  }, [body]);

  return (
    <div className={styles.frame} data-node-id="13:87">
      <section className={styles.section} data-name="section-header" data-node-id="13:91">
        <div className={styles.headerArea}>
          <div className={`${styles.titleRow} ${isMenuOpen ? styles.titleRowOpen : ""}`} data-name="page title" data-node-id="13:92">
            <button
              type="button"
              className={`${styles.iconButton} ${isMenuOpen ? styles.iconButtonOpen : ""}`}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
              aria-controls="work-menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <span className={styles.burger} aria-hidden="true">
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
              </span>
            </button>

            {isMenuOpen ? (
              <nav id="work-menu" className={styles.menuInline} aria-label="메인 메뉴">
                <Link className={styles.menuLink} href="/about" onClick={() => setIsMenuOpen(false)}>
                  ABOUT
                </Link>
                <Link className={styles.menuLink} href="/obj1" onClick={() => setIsMenuOpen(false)}>
                  WORK
                </Link>
              </nav>
            ) : (
              <h1 className={styles.pageTitle} data-node-id="13:93">
                WORK
              </h1>
            )}
          </div>
        </div>

        <div className={styles.details} data-name="page title" data-node-id="13:102">
          <p>{obj}</p>
          <p>{meta}</p>
          <div className={styles.gap} />
          {bodyLines.map((line, idx) =>
            line === "" ? <div key={idx} className={styles.gap} /> : <p key={idx}>{line}</p>
          )}
        </div>

        <div className={styles.spacer} />

        <div className={styles.bottomNavRow} data-name="page title" data-node-id="13:94">
          <Link className={`${styles.navLink} ${styles.left}`} href="/obj1" data-node-id="13:95">
            OBJ1
          </Link>
          <Link className={`${styles.navLink} ${styles.center}`} href="/obj2" data-node-id="13:96">
            OBJ2
          </Link>
          <Link className={`${styles.navLink} ${styles.right}`} href="/obj3" data-node-id="13:97">
            OBJ3
          </Link>
        </div>
      </section>
    </div>
  );
}

