import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/about.module.css";

const PROFILE_PARAS = [
  "I am a product designer who focuses on rethinking everyday experiences through the things people touch and use. Rather than separating form and function, I approach design as a continuous relationship between user behavior, context, and interaction.",
  "My process is rooted in making—quickly building prototypes, testing them in real situations, and refining ideas through iteration. This allows me to move beyond assumptions and understand how a product truly lives in the hands of its user. in the hands of its user.",
];

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
        <div
          className={`${styles.headerArea} ${isMenuOpen ? styles.headerAreaOpen : ""}`}
          data-name="page title"
          data-node-id="13:46"
        >
          <div
            className={`${styles.titleRow} ${isMenuOpen ? styles.titleRowOpen : ""}`}
          >
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
                className={`${styles.menuInline} ${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayBlurred : ""} ${styles.menuMotion}`}
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
          <Image
            className={styles.imagePlaceholder}
            src="/images/about-profile.png"
            alt="Sio Park"
            width={320}
            height={427}
            sizes="(max-width: 900px) 100vw, 320px"
            quality={92}
            data-node-id="13:58"
          />

          <div className={styles.middleCol}>
            <p className={styles.metaText} data-node-id="13:68">
              email : siopark.design@gmail.com
            </p>
            <div className={styles.divider} aria-hidden="true" />
            <p className={styles.metaText} data-node-id="13:69">
              insta : sio.park_
            </p>
            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.bioBlock} data-node-id="13:74">
              {PROFILE_PARAS.map((para, i) => (
                <p key={i} className={styles.smallText}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.rightColStack}>
              <div className={styles.educationBlock}>
                <p className={`${styles.metaText} ${styles.blockHeadingCaps}`} data-node-id="47:109">
                  EDUCATION
                </p>
                <div className={styles.educationInner}>
                  <div className={styles.eduYearRow}>
                    <span className={styles.metaText}>{`2022 - `}</span>
                    <span className={styles.metaText}>Currents</span>
                  </div>
                  <p className={styles.metaText}>Korea National University of Arts</p>
                  <p className={styles.metaText}>Product design</p>
                  <div className={`${styles.divider} ${styles.rightColDivider}`} aria-hidden="true" />
                </div>
              </div>

              <div className={styles.experienceBlock} data-node-id="47:100">
                <p className={styles.bodySmall}>Experience</p>
                <p className={styles.bodySmall}>2023.10-2024.02</p>
                <p className={styles.bodySmall}>LG Display CMF Researcher</p>
                <p className={styles.bodySmall}>2024.12</p>
                <p className={styles.bodySmall}>DDP design store Entry Screening Round 1</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.spacer} />

        <div className={styles.aboutFooterRow} data-name="page title" data-node-id="47:103">
          <Link className={`${styles.aboutFooterLink} ${styles.aboutFooterLeft}`} href="/obj1" data-node-id="47:104">
            Layering
          </Link>
          <Link className={`${styles.aboutFooterLink} ${styles.aboutFooterCenter}`} href="/obj2" data-node-id="47:105">
            Sky Pixels
          </Link>
          <Link className={`${styles.aboutFooterLink} ${styles.aboutFooterRight}`} href="/obj3" data-node-id="47:106">
            Gradation Clock
          </Link>
        </div>
      </section>
    </div>
  );
}

