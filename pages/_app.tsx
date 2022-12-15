import axios from 'axios';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

axios.defaults.baseURL = 'http://localhost:5001';

export default function App({ Component, pageProps }: AppProps) {
  return (
    //! 6 👇

    <SWRConfig
      value={{
        fetcher: (url: string) => axios(url).then((res) => res.data),
        dedupingInterval: 10000,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
