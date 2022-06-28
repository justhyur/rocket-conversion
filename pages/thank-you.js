import Head from "next/head";
import {useRef, useEffect} from 'react';

export default function ThankYouPage() {
    const scriptLaunched = useRef(false);
    useEffect(()=>{
      if(!scriptLaunched.current){
        const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
        console.log({pixelId})
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', pixelId);
        fbq('track', 'Purchase');
        console.log('Script Launched');
        scriptLaunched.current = true;
      }
    },[]);
    return(
    <>
      <Head>
        <title>Rocket Profit Checklist - Thank you</title>
      </Head>
      <div style={{display: "flex", justifyContent:"center", alignContent:"center", width:"100%", height:"100vh", flexDirection:"column"}}>
          <h1 style={{color: "black", textAlign:"center"}}>Thank you!</h1>
          <p style={{textAlign:"center"}}>You will receive the Rocket Profit Checklist soon.</p>
      </div>
    </>
    )
}
