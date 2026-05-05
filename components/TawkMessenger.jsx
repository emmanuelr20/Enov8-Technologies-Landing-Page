"use client";

import Script from "next/script";

const TawkMessenger = () => {
  return (
    <>
      {/* Start of Tawk.to Script */}
      <Script id="tawk-to" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/69e36fb0917d361c322fb3e3/1jmg6oj53';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
      {/* End of Tawk.to Script */}
    </>
  );
};

export default TawkMessenger;
