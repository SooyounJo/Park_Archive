import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SkyPixelsCopy } from "@/components/work/skyPixelsCopy";
import styles from "@/styles/work.module.css";

const DEFAULT_BODY = [
  "I’m interested in creating products that are not only visually refined, but also intuitive, adaptive, and meaningful over time. To me, good design is something that reveals itself gradually—something that users come to understand, trust, and form a relationship with.",
  "Ultimately, I aim to design objects that feel less like tools and more like companions—quietly supporting everyday life while continuously evolving with the user.",
];

/** Strip-down embed: no control bar, modest branding; mute+autoplay so Shorts overlay clears (tap to unmute). */
function youtubeEmbedSrc(videoId) {
  const q = new URLSearchParams({
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    controls: "0",
    fs: "0",
    iv_load_policy: "3",
    cc_load_policy: "0",
    disablekb: "1",
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
  });
  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${q.toString()}`;
}

/**
 * @param {object} [props.workScroll]
 * @param {string[]} props.workScroll.images
 * @param {import('react').ReactNode} props.workScroll.copy — fixed left copy (e.g. SkyPixelsCopy, LayeringCopy)
 * @param {string} [props.workScroll.youtubeId] — optional final black section with embedded Short
 * @param {string[] | null} [props.skyScrollImages] — legacy; same as workScroll.images + SkyPixelsCopy
 */
export function WorkFrame({
  obj = "Layering",
  meta = "2025 / CMF : / NAME",
  body = DEFAULT_BODY,
  heroImage = null,
  heroAlt = "",
  skyScrollImages = null,
  workScroll = null,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollCopyOpacity, setScrollCopyOpacity] = useState(1);
  const scrollPortRef = useRef(null);
  const router = useRouter();
  const activeObj =
    router.pathname === "/obj1"
      ? "obj1"
      : router.pathname === "/obj2"
        ? "obj2"
        : router.pathname === "/obj3"
          ? "obj3"
          : null;

  const bodyLines = useMemo(() => {
    const parts = Array.isArray(body) ? body : [String(body)];
    return parts.flatMap((p, i) => (i === 0 ? [p] : ["", p]));
  }, [body]);

  const scrollConfig =
    workScroll?.images?.length > 0
      ? workScroll
      : skyScrollImages?.length > 0
        ? { images: skyScrollImages, copy: <SkyPixelsCopy /> }
        : null;

  const scrollStackActive = Boolean(scrollConfig?.images?.length);

  useEffect(() => {
    const close = () => setIsMenuOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    if (!scrollStackActive) return undefined;
    const root = document.documentElement;
    const bodyEl = document.body;
    root.classList.add("hide-scrollbar");
    root.style.colorScheme = "light";
    const prevBg = bodyEl.style.background;
    const prevRootOverflow = root.style.overflow;
    const prevBodyOverflow = bodyEl.style.overflow;
    bodyEl.style.background = "#f0f2f2";
    root.style.overflow = "hidden";
    bodyEl.style.overflow = "hidden";
    return () => {
      root.classList.remove("hide-scrollbar");
      root.style.colorScheme = "";
      bodyEl.style.background = prevBg;
      root.style.overflow = prevRootOverflow;
      bodyEl.style.overflow = prevBodyOverflow;
    };
  }, [scrollStackActive]);

  useLayoutEffect(() => {
    if (!scrollStackActive) return undefined;
    const updateOpacity = () => {
      const el = scrollPortRef.current;
      if (!el) return;
      const scrollTop = el.scrollTop;
      const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
      const t = maxScroll <= 0 ? 0 : scrollTop / maxScroll;
      setScrollCopyOpacity(Math.min(1, Math.max(0, 1 - t)));
    };
    const el = scrollPortRef.current;
    if (!el) return undefined;
    updateOpacity();
    el.addEventListener("scroll", updateOpacity, { passive: true });
    window.addEventListener("resize", updateOpacity, { passive: true });
    return () => {
      el.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", updateOpacity);
    };
  }, [scrollStackActive]);

  const bottomNav = (
    <div className={styles.bottomNavRow} data-name="page title" data-node-id="13:94">
      <Link
        className={`${styles.navLink} ${styles.left} ${
          activeObj ? (activeObj === "obj1" ? styles.navActive : styles.navInactive) : ""
        }`}
        href="/obj1"
        data-node-id="13:95"
        aria-current={activeObj === "obj1" ? "page" : undefined}
      >
        Layering
      </Link>
      <Link
        className={`${styles.navLink} ${styles.center} ${
          activeObj ? (activeObj === "obj2" ? styles.navActive : styles.navInactive) : ""
        }`}
        href="/obj2"
        data-node-id="13:96"
        aria-current={activeObj === "obj2" ? "page" : undefined}
      >
        Sky Pixels
      </Link>
      <Link
        className={`${styles.navLink} ${styles.right} ${
          activeObj ? (activeObj === "obj3" ? styles.navActive : styles.navInactive) : ""
        }`}
        href="/obj3"
        data-node-id="13:97"
        aria-current={activeObj === "obj3" ? "page" : undefined}
      >
        Gradation Clock
      </Link>
    </div>
  );

  const headerBlock = (
    <div className={`${styles.headerArea} ${isMenuOpen ? styles.headerAreaOpen : ""}`}>
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
          <nav
            id="work-menu"
            className={`${styles.menuInline} ${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayBlurred : ""} ${styles.menuMotion}`}
            aria-label="메인 메뉴"
          >
            <Link className={styles.menuLink} href="/" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
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
  );

  if (scrollConfig?.images?.length) {
    const firstAlt =
      obj === "Sky Pixels"
        ? "Sky Pixels"
        : obj === "Gradation Clock"
          ? "Gradation Clock"
          : "Layering";
    return (
      <div
        className={`${styles.frameSky} ${obj === "Sky Pixels" ? styles.skyPixelsFrame : ""}`}
        data-node-id="42:161"
      >
        <div ref={scrollPortRef} className={styles.skyScrollPort}>
          {scrollConfig.images.map((src, i) => (
            <div key={`${src}-${i}`} className={styles.skyScrollBlock}>
              <Image
                src={src}
                alt={i === 0 ? firstAlt : ""}
                fill
                className={styles.skyScrollImg}
                sizes="100vw"
                priority={i === 0}
                unoptimized
              />
            </div>
          ))}
          {scrollConfig.youtubeId ? (
            <div className={styles.scrollVideoSection}>
              <iframe
                className={styles.scrollVideoIframe}
                src={youtubeEmbedSrc(scrollConfig.youtubeId)}
                title="Layering — video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null}
        </div>

        <div className={styles.skyFixedLayer}>
          <div className={styles.skyFixedTopPad}>{headerBlock}</div>
          <div className={styles.skyCopyFadeWrap} style={{ opacity: scrollCopyOpacity }}>
            {scrollConfig.copy}
          </div>
          <div className={styles.skyFixedBottom}>{bottomNav}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.frame} data-node-id="13:87">
      <section className={styles.section} data-name="section-header" data-node-id="13:91">
        {headerBlock}

        {heroImage ? (
          <div className={styles.heroWrap}>
            <div className={styles.heroAspect}>
              <Image
                src={heroImage}
                alt={heroAlt || obj}
                fill
                className={styles.heroImg}
                sizes="100vw"
                priority
                unoptimized
              />
            </div>
          </div>
        ) : null}

        <div className={styles.details} data-name="page title" data-node-id="13:102">
          <p>{obj}</p>
          <p>{meta}</p>
          <div className={styles.gap} />
          {bodyLines.map((line, idx) =>
            line === "" ? <div key={idx} className={styles.gap} /> : <p key={idx}>{line}</p>
          )}
        </div>

        <div className={styles.spacer} />

        {bottomNav}
      </section>
    </div>
  );
}
