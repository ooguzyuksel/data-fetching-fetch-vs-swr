import { useRouter } from 'next/router';
import Image from 'next/image';
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
          <Image
            priority
            height={200}
            width={200}
            src='/js-fetch-api.jpeg'
            alt='Fetch API'
          />
          <span>Fetch based approach</span>
        </button>
        <button
          onClick={() => push('/swr-based-approach')}
          className={styles.button}
        >
          <Image
            priority
            height={150}
            width={200}
            src='/swr-data-fetching.jpeg'
            alt='SWR'
          />
          SWR based approach
        </button>
        <button onClick={() => push('/fetch-vs-swr')} className={styles.button}>
          See both approaches side by side
        </button>
      </div>
    </div>
  );
}
