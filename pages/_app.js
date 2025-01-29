import {useEffect} from 'react'
import "@/styles/globals.css";
import { Provider } from 'react-redux';
import store from '../store/store'
import LoadingIndicator from "@/components/loading/loading_indicator";
import Script from 'next/script';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    document.body.classList.add('loading');
    return () => document.body.classList.remove('loading');
  }, []);
  
  return <Provider store={store}>
    <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6762897385240636"
        strategy="afterInteractive" // Script hanya dimuat setelah halaman dimuat
        crossOrigin="anonymous"
        onError={(e) => console.error('AdSense script failed to load', e)}
      />
          <LoadingIndicator />

    <Component {...pageProps} />
  </Provider>;
}
