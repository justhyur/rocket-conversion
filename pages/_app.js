import { GlobalContext } from '/lib/context';
import '../styles/globals.scss';
import '../styles/flexmaster.scss';

function MyApp({ Component, pageProps }) {
  return(<>
      <GlobalContext.Provider value={{}}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  ) 
}

export default MyApp
