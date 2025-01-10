import "@/styles/css/bootstrap.min.css";
import "@/styles/scss/app.css?v=0.1";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
