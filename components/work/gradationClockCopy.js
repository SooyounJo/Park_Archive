import styles from "@/styles/work.module.css";

export function GradationClockCopy() {
  return (
    <div className={styles.skyCopy}>
      <div className={styles.skyCopyHead}>
        <p className={styles.skyCopyLine}>Gradation Clock</p>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>2025</p>
      </div>
      <div className={styles.skyCopyBody}>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>lighting object / kinetic object</p>
        <p className={styles.skyCopyLine}>hand-dyed acrylic panels, SLA, PLA parts, motor, led</p>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>
          Gradient Clock expresses time as a gradient. Instead of numbers, it reveals time through shifting light
          and color.
        </p>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>
          Hand-dyed acrylic blocks capture tones from dawn to night, forming a continuous gradient. As light moves,
          the gradient changes, making time visible through color.
        </p>
      </div>
    </div>
  );
}
