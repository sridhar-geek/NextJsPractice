import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Welcome to HomePage</h1>
      <Link href='/about'> Link to About Page</Link>
      <Link href='/users'> Link to Users Page</Link>
    </main>
  );
}
