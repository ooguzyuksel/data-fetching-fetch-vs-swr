import { useRouter } from 'next/router';
import styles from '../styles/home.module.scss';

export default function Home() {
  const { push } = useRouter();
  return (
    <div className={styles.root}>
      <h1>Data Fetching: Conventional Approach vs SWR Approach</h1>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => push('/fetch-based-approach')}
          className={styles.button}
        >
          Fetch based approach
        </button>
        <button
          onClick={() => push('/swr-based-approach')}
          className={styles.button}
        >
          SWR based approach
        </button>
        <button onClick={() => push('/fetch-vs-swr')} className={styles.button}>
          See both approaches side by side (her iki yöntem yan yana olacak)
        </button>
      </div>
    </div>
  );
}
