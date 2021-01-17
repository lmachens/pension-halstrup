import "../styles/styles.scss";
import App from "next/app";
import dynamic from "next/dynamic";
import AppHeader from "../components/AppHeader";

const AppFooter = dynamic(() => import("../components/AppFooter"));

function MyApp({ Component, pageProps, footer }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </>
  );
}

export default MyApp;
