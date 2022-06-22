import { GlobalContext } from '/lib/context';
import Head from 'next/head';
import FacebookPixel from '../components/FacebookPixel';
import '../styles/globals.scss';
import '../styles/flexmaster.scss'

function MyApp({ Component, pageProps }) {
  const FB_PIXEL_ID = process.env.FB_PIXEL_ID;
  console.log({FB_PIXEL_ID});
  return(<>
      <Head>
        <FacebookPixel FB_PIXEL_ID={FB_PIXEL_ID}/>
      </Head>
      <GlobalContext.Provider value={{}}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  ) 
}

export default MyApp
