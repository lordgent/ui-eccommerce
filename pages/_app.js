import {useEffect} from 'react'
import "@/styles/globals.css";
import { Provider } from 'react-redux';
import store from '../store/store'
import LoadingIndicator from "@/components/loading/loading_indicator";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    document.body.classList.add('loading');
    return () => document.body.classList.remove('loading');
  }, []);
  
  return <Provider store={store}>
          <LoadingIndicator />

    <Component {...pageProps} />
  </Provider>;
}
