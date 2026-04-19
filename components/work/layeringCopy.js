import styles from "@/styles/work.module.css";

export function LayeringCopy() {
  return (
    <div className={styles.skyCopy}>
      <div className={styles.skyCopyHead}>
        <p className={styles.skyCopyLine}>Layering</p>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>2024</p>
      </div>
      <div className={styles.skyCopyBody}>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>lighting object</p>
        <p className={styles.skyCopyLine}>hand-dyed acrylic panels, PLA parts, motor, led</p>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>
          Layering brings the sky indoors. It lets you experience the changing light of nature within a room.
        </p>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>
          Hand-dyed acrylic plates capture subtle tones from dawn to night, stacked into a spherical form that
          reflects the sun&apos;s path. A moving light traces a circular motion, allowing users to experience or
          pause moments like sunrise and sunset.
        </p>
        <p className={styles.skyCopyLine} aria-hidden="true">
          {"\u00a0"}
        </p>
        <p className={styles.skyCopyLine}>
          Polished edges create caustic light effects, capturing fleeting moments of brightness in everyday life.
        </p>
      </div>
    </div>
  );
}
