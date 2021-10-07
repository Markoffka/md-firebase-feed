import { Header } from '../components/Header';
import GlobalStyle from '../components/GlobalStyle';
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*
      <GlobalStyle />
       <Header initialMenuList={[
        { href: '/', title: 'Main' },
        { href: '/dashboard', title: 'Dashboard' },
        { href: '/dashboard/profile/settings', title: 'Settings' },
        { href: '/dashboard/profile', title: 'Profile' },
      ]} /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
