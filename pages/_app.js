import { GlobalContext } from '/lib/context';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <GlobalContext.Provider value={{}}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </GlobalContext.Provider>
  ) 
}

export default MyApp
