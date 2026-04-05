import Link from "next/link";

export function Layout({ children }) {
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <Link className="brand" href="/">
            parka
          </Link>
          <nav className="nav">
            <Link href="/">홈</Link>
            <a href="/api/health" target="_blank" rel="noreferrer">
              health
            </a>
          </nav>
        </div>
      </header>

      <main className="container main">{children}</main>

      <footer className="footer">
        <div className="container footerInner">
          <span>© {new Date().getFullYear()} parka</span>
        </div>
      </footer>
    </div>
  );
}

