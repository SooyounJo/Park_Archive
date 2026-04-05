import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/about.module.css";

const PROFILE_TEXT =
  "I am a product designer who focuses on rethinking\neveryday experiences through the things people touch\nand use. Rather than separating form and function, I\napproach design as a continuous relationship between\nuser behavior, context, and interaction.\n\nMy process is rooted in making—quickly building\nprototypes, testing them in real situations, and refining\nideas through iteration. This allows me to move beyond\nassumptions and understand how a product truly lives\nin the hands of its user. in the hands of its user.";

const PHILOSOPHY_TEXT =
  "I’m interested in creating products that are not only\nvisually refined, but also intuitive, adaptive, and\nmeaningful over time. To me, good design is something\nthat reveals itself gradually—something that users\ncome to understand, trust, and form a relationship with.\n\nUltimately, I aim to design objects that feel less like\ntools and more like companions—quietly supporting\neveryday life while continuously evolving with the user.";

export function AboutFrame() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const glowRef = useRef(null);

  useEffect(() => {
    const close = () => setIsMenuOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches;
    if (!finePointer) return;

    let x = 0;
    let y = 0;
    let raf = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const el = glowRef.current;
        if (!el) return;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        el.style.opacity = "1";
      });
    };

    const hide = () => {
      const el = glowRef.current;
      if (!el) return;
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", hide, { passive: true });
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.frame} data-node-id="13:41">
      <div ref={glowRef} className={styles.cursorGlow} aria-hidden="true" />
      <section className={styles.section} data-name="section-header" data-node-id="13:45">
        <div className={styles.headerArea} data-name="page title" data-node-id="13:46">
          <div className={`${styles.titleRow} ${isMenuOpen ? styles.titleRowOpen : ""}`}>
            <button
              type="button"
              className={`${styles.iconButton} ${isMenuOpen ? styles.iconButtonOpen : ""}`}
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
              <nav
                id="about-menu"
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
              <h1 className={styles.pageTitle} data-node-id="13:47">
                ABOUT
              </h1>
            )}
          </div>
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

            <p className={styles.smallText} data-node-id="13:74">
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

            <p className={styles.smallText} data-node-id="13:84">
              {PHILOSOPHY_TEXT}
            </p>
          </div>
        </div>

        <div className={styles.spacer} />
      </section>
    </div>
  );
}

