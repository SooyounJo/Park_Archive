import { Seo } from "@/components/common/Seo";
import { LayeringCopy } from "@/components/work/layeringCopy";
import { WorkFrame } from "@/components/work/WorkFrame";

const LAYERING_SCROLL_IMAGES = [
  "/images/layer.png",
  "/images/lay/lay1.png",
  "/images/lay/lay2.png",
];

export default function Obj1Page() {
  return (
    <>
      <Seo title="Layering" description="Layering" />
      <WorkFrame
        obj="Layering"
        meta="2025 / CMF : / NAME"
        workScroll={{
          images: LAYERING_SCROLL_IMAGES,
          copy: <LayeringCopy />,
          youtubeId: "5gfKqeVI1V0",
        }}
      />
    </>
  );
}
