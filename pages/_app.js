import Layout from "@/components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import Notification from "@/components/ui/notification";
import { NotificationProvider } from "@/store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <title>NextJS Events</title>
          <meta name="description" content="NextJS events" />
          <meta name="viewport" content="intial-scale=1.0 width=device-width" />
        </Head>
        <Component {...pageProps} />
        <Notification title="Test" message="This is test message" status="pending" />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
