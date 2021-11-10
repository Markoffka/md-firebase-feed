/* eslint-disable @next/next/no-css-tags */
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import { Header } from '.';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div style={{ height: '100%' }}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component className="" {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
