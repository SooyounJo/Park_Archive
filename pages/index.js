import { Seo } from "@/components/common/Seo";
import { MainNewsFrame } from "@/components/home/MainNewsFrame";

export default function HomePage() {
  return (
    <>
      <Seo title="PARKSIO" description="PARKSIO 메인" />
      <MainNewsFrame />
    </>
  );
}

