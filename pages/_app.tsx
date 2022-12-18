import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

const baseUrl = 'http://localhost:5001';

export default function App({ Component, pageProps }: AppProps) {
  const fetcher = (baseUrl: string) => fetch(baseUrl).then((r) => r.json());

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetcher(`${baseUrl}${url}`),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
