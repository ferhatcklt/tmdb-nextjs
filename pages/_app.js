import styles from '../styles/swiper.css'
import '../styles/global.css'
import Header from '../components/header'
import Footer from '../components/footer'


export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

