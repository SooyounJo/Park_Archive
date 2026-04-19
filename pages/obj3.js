import { Seo } from "@/components/common/Seo";
import { GradationClockCopy } from "@/components/work/gradationClockCopy";
import { WorkFrame } from "@/components/work/WorkFrame";

const GRADATION_CLOCK_IMAGES = [
  "/images/clock/clock1.png",
  "/images/clock/clock2.png",
  "/images/clock/clock3.png",
  "/images/clock/clock4.png",
];

export default function Obj3Page() {
  return (
    <>
      <Seo title="Gradation Clock" description="Gradation Clock" />
      <WorkFrame
        obj="Gradation Clock"
        meta="2025 / CMF : / NAME"
        workScroll={{
          images: GRADATION_CLOCK_IMAGES,
          copy: <GradationClockCopy />,
        }}
      />
    </>
  );
}
