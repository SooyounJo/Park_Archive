import Link from "next/link";
import { Layout } from "@/components/common/Layout";
import { Seo } from "@/components/common/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="404" description="페이지를 찾을 수 없습니다." />
      <Layout>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
          페이지를 찾을 수 없어요
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 16 }}>
          주소를 확인하거나 홈으로 이동해 주세요.
        </p>
        <Link href="/" style={{ textDecoration: "underline" }}>
          홈으로
        </Link>
      </Layout>
    </>
  );
}

