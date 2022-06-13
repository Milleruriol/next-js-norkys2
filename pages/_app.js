import Layout from "../components/Layout";
import "../styles/index.css";
function MyApp({ Component, pageProps }) {
  return (
      <>
          <div className="App">
              <Layout/>
              <Component {...pageProps} />
          </div>
      </>
  )
}

export default MyApp
