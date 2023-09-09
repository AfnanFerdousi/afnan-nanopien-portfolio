import '@/styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      offset: 50,
    }); 
  }, []);

  return <Component {...pageProps} />
}
