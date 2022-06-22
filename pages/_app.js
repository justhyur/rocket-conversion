import { GlobalContext } from '/lib/context';
import Head from 'next/head';
import FacebookPixel from '../components/FacebookPixel';
import '../styles/globals.scss';
import '../styles/flexmaster.scss'

function MyApp({ Component, pageProps }) {
  return(<>
      <Head>
        <FacebookPixel/>
      </Head>
      <GlobalContext.Provider value={{}}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  ) 
}

export default MyApp
