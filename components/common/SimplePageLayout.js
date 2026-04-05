import Link from "next/link";
import styles from "@/styles/simplePage.module.css";

export function SimplePageLayout({ title, children, right }) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <h1 className={styles.title}>{title}</h1>
          <div>{right || <Link className={styles.link} href="/">홈으로</Link>}</div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

