// pages/_app.js
import '../styles/globals.scss'; // グローバルスタイルのインポート

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;