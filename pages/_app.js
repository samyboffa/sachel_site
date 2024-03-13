import Layout from "@/components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.scss";
import "../styles/Termina.css"
import "@/styles/globals.css";
import 'react-phone-number-input/style.css'
import { ContactProvider } from "@/context/ContactContext";

export default function App({ Component, pageProps }) {
  
  return (
    <ContactProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContactProvider>
  );
}
