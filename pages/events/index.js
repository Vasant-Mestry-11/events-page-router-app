import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/helpers/apiUtils";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EventsPage({ events }) {
  const router = useRouter()

  if (!events || events.length === 0) {
    return <p>No events</p>;
  }

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return <>
    <Head>
      <title>All Events</title>
      <meta
        name="description"
        content="Find a lot of great events that allow you evolve."
      />
    </Head>
    <EventSearch onSearch={handleSearch} />
    <EventList items={events} />
  </>
}


export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events
    },
    revalidate: 60
  }
}