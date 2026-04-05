import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="badge">Next.js (pages router) + React</div>
      <h1 className="heroTitle">기본 웹사이트 구조가 준비됐어요</h1>
      <p className="heroDesc">
        `src/pages`, `src/components`, `src/utils`, `src/styles` 기반으로 바로
        확장할 수 있게 뼈대를 잡아뒀습니다.
      </p>

      <div className="heroActions">
        <Link className="buttonPrimary" href="/">
          홈
        </Link>
        <a className="buttonGhost" href="/api/health" target="_blank" rel="noreferrer">
          /api/health 확인
        </a>
      </div>
    </section>
  );
}

