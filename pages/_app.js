import Layout from "@/components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="NextJS events"/>
        <meta name="viewport" content="intial-scale=1.0 width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
