import Layout from "../components/Layout";
import "../styles/index.css";
import React, { useEffect} from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const use = async () => {
          (await import('tw-elements')).default;
            };
            use();
          }, []);
  return (
      <>
          <div className="App">
              <Layout>
              <Component {...pageProps} />
              </Layout>
          </div>
      </>
  )
}

export default MyApp
