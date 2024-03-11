import Layout from "@/components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.scss";
import "@/styles/globals.css";
import 'react-phone-number-input/style.css'
import { useEffect } from "react";
import ContactContext, { ContactProvider } from "@/context/ContactContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <ContactProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContactProvider>
  );
}
