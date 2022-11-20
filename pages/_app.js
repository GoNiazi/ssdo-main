import "../styles/theme.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      />
  
      <Script src="/js/sticky.js" 
       strategy="lazyOnload"
        type="text/javascript" />
      <Script src="/js/flickity.js"
       strategy="lazyOnload"
       type="text/javascript" />
      <Script src="/js/lazyload.js" 
       strategy="lazyOnload"
       type="text/javascript" />
    
      <Script src="/js/theme.js" 
       strategy="lazyOnload"
       type="text/javascript" />
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;