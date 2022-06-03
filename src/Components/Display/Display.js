import styles from "./Display.module.scss";

function Display() {
  return (
    <div className={styles.Display}>
      <h1 className={styles.DisplayValue}>0.0000</h1>
      <h1 className={styles.DisplayTitle}>Total Donation</h1>
    </div>
  );
}

export default Display;
