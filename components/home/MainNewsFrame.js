import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "@/styles/home.module.css";

const MAIN_SLIDE_IMAGES = ["/images/skypx1.png", "/images/gra.png", "/images/layer.png"];
const SLIDE_INTERVAL_MS = 6000;
/** Always show white splash with title for this long, then fade to the main view. */
const SPLASH_HOLD_MS = 2000;
const SPLASH_FADE_MS = 900;

export function MainNewsFrame() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const [introExiting, setIntroExiting] = useState(false);
  const splashExitFallbackRef = useRef(null);
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

  useEffect(() => {
    const holdTimer = window.setTimeout(() => {
      setIntroExiting(true);
      splashExitFallbackRef.current = window.setTimeout(() => {
        setIntroDone(true);
      }, SPLASH_FADE_MS + 120);
    }, SPLASH_HOLD_MS);
    return () => {
      window.clearTimeout(holdTimer);
      if (splashExitFallbackRef.current) {
        window.clearTimeout(splashExitFallbackRef.current);
        splashExitFallbackRef.current = null;
      }
    };
  }, []);

  /** Lock scroll before paint so the first frame never scrolls behind the splash. */
  useLayoutEffect(() => {
    if (introDone) return undefined;
    const root = document.documentElement;
    const bodyEl = document.body;
    const prevRoot = root.style.overflow;
    const prevBody = bodyEl.style.overflow;
    const prevH = root.style.height;
    root.style.overflow = "hidden";
    bodyEl.style.overflow = "hidden";
    root.style.height = "100%";
    bodyEl.style.height = "100%";
    return () => {
      root.style.overflow = prevRoot;
      bodyEl.style.overflow = prevBody;
      root.style.height = prevH;
      bodyEl.style.height = "";
    };
  }, [introDone]);

  const handleSplashTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "opacity") return;
    if (splashExitFallbackRef.current) {
      window.clearTimeout(splashExitFallbackRef.current);
      splashExitFallbackRef.current = null;
    }
    setIntroDone((d) => (d ? d : true));
  };

  useEffect(() => {
    if (!introDone) return undefined;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % MAIN_SLIDE_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [introDone]);

  return (
    <div
      className={`${styles.frame} ${introDone ? styles.introComplete : styles.introPending}`}
      data-node-id="2:24"
    >
      <div className={styles.bgSlideshow} aria-hidden="true">
        {MAIN_SLIDE_IMAGES.map((src, i) => (
          <div
            key={src}
            className={styles.bgSlide}
            style={{ opacity: i === slideIndex ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              className={styles.bgSlideImg}
              sizes="100vw"
              priority
              unoptimized
            />
          </div>
        ))}
      </div>

      {!introDone ? (
        <div
          className={styles.splashOverlay}
          aria-hidden="true"
          onTransitionEnd={handleSplashTransitionEnd}
          style={{
            opacity: introExiting ? 0 : 1,
            transition: `opacity ${SPLASH_FADE_MS}ms ease`,
            pointerEvents: introExiting ? "none" : "auto",
          }}
        >
          <p className={styles.splashTitle}>PARKSIO</p>
        </div>
      ) : null}

      <section
        className={styles.section}
        data-name="news"
        data-node-id="2:25"
        aria-hidden={!introDone}
      >
        <div className={styles.padX} data-name="section-header" data-node-id="2:38">
          <div className={`${styles.headerArea} ${isMenuOpen ? styles.headerAreaOpen : ""}`}>
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
              Layering
            </Link>
            <Link
              className={`${styles.tabLink} ${styles.tab} ${styles.tabCenter} ${
                activeObj ? (activeObj === "obj2" ? styles.tabActive : styles.tabInactive) : ""
              }`}
              href="/obj2"
              data-node-id="13:16"
              aria-current={activeObj === "obj2" ? "page" : undefined}
            >
              Sky Pixels
            </Link>
            <Link
              className={`${styles.tabLink} ${styles.tab} ${styles.tabRight} ${
                activeObj ? (activeObj === "obj3" ? styles.tabActive : styles.tabInactive) : ""
              }`}
              href="/obj3"
              data-node-id="13:18"
              aria-current={activeObj === "obj3" ? "page" : undefined}
            >
              Gradation Clock
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
