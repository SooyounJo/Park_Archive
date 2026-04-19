import { Seo } from "@/components/common/Seo";
import { SkyPixelsCopy } from "@/components/work/skyPixelsCopy";
import { WorkFrame } from "@/components/work/WorkFrame";

const SKY_PIXELS_SCROLL_IMAGES = [
  "/images/skypx1.png",
  "/images/sky/sky2.png",
  "/images/sky/sky3.png",
  "/images/sky/sky4.png",
  "/images/sky/sky5.png",
  "/images/sky/sky6.png",
  "/images/sky/sky7.png",
  "/images/sky/sky8.png",
  "/images/sky/sky9.png",
];

export default function Obj2Page() {
  return (
    <>
      <Seo title="Sky Pixels" description="Sky Pixels" />
      <WorkFrame
        obj="Sky Pixels"
        meta="2025 / CMF : / NAME"
        workScroll={{ images: SKY_PIXELS_SCROLL_IMAGES, copy: <SkyPixelsCopy /> }}
      />
    </>
  );
}

