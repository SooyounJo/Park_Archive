import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/about.module.css";

const PROFILE_TEXT =
  "I am a product designer who focuses on rethinking everyday experiences through the things people touch and use. Rather than separating form and function, I approach design as a continuous relationship between user behavior, context, and interaction.\n\nMy process is rooted in making—quickly building prototypes, testing them in real situations, and refining ideas through iteration. This allows me to move beyond assumptions and understand how a product truly lives in the hands of its user. in the hands of its user.";

const PHILOSOPHY_TEXT =
  "I’m interested in creating products that are not only visually refined, but also intuitive, adaptive, and meaningful over time. To me, good design is something that reveals itself gradually—something that users come to understand, trust, and form a relationship with.\n\nUltimately, I aim to design objects that feel less like tools and more like companions—quietly supporting everyday life while continuously evolving with the user.";

export function AboutFrame() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.frame} data-node-id="13:41">
      <section className={styles.section} data-name="section-header" data-node-id="13:45">
        <div className={styles.headerRow} data-name="page title" data-node-id="13:46">
          <button
            type="button"
            className={styles.iconButton}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
            aria-controls="about-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className={styles.burger} aria-hidden="true">
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </span>
          </button>

          {isMenuOpen ? (
            <nav id="about-menu" className={styles.menuInline} aria-label="메인 메뉴">
              <Link className={styles.menuLink} href="/about" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </Link>
              <Link className={styles.menuLink} href="/obj1" onClick={() => setIsMenuOpen(false)}>
                WORK
              </Link>
            </nav>
          ) : (
            <h1 className={styles.pageTitle} data-node-id="13:47">
              ABOUT
            </h1>
          )}
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.imagePlaceholder} data-node-id="13:58" />

          <div className={styles.middleCol}>
            <p className={styles.metaText} data-node-id="13:68">
              E : SIOBABO@gmail.com
            </p>
            <div className={styles.divider} aria-hidden="true" />
            <p className={styles.metaText} data-node-id="13:69">
              IN : SIOBABO
            </p>
            <div className={styles.divider} aria-hidden="true" />

            <p className={`${styles.smallText} ${styles.profileText}`} data-node-id="13:74">
              {PROFILE_TEXT}
            </p>
          </div>

          <div className={styles.rightCol}>
            <p className={`${styles.metaText} ${styles.educationTitle}`} data-node-id="13:76">
              EDUCATION
            </p>

            <div className={styles.educationGrid}>
              <p className={`${styles.metaText} ${styles.eduYears}`} data-node-id="13:78">
                {"2022\n-\n2026"}
              </p>
              <p className={`${styles.metaText} ${styles.eduSchool}`} data-node-id="13:82">
                {"Korea National University\n\nObject Design"}
              </p>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            <p className={`${styles.smallText} ${styles.philosophyText}`} data-node-id="13:84">
              {PHILOSOPHY_TEXT}
            </p>
          </div>
        </div>

        <div className={styles.spacer} />

        <div className={styles.bottomNavRow} data-name="page title" data-node-id="13:50">
          <Link className={`${styles.navLink} ${styles.left}`} href="/obj1" data-node-id="13:51">
            OBJ
          </Link>
          <Link className={`${styles.navLink} ${styles.center}`} href="/obj2" data-node-id="13:52">
            OBJ
          </Link>
          <Link className={`${styles.navLink} ${styles.right}`} href="/obj3" data-node-id="13:53">
            OBJ
          </Link>
        </div>
      </section>
    </div>
  );
}

