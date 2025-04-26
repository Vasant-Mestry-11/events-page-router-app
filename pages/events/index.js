import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
// import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router";

export default function EventsPage({ events }) {
  // console.log(events)
  const router = useRouter()

  if (!events || events.length === 0) {
    return <p>No events</p>;
  }

  // const allEvents = getAllEvents();

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);

  }

  return <>
    <EventSearch onSearch={handleSearch} />
    <EventList items={events} />
  </>
}


export async function getServerSideProps() {
  const response = await fetch('https://nextjs-events-page-router-default-rtdb.firebaseio.com/events.json')
  const data = await response.json();

  const transformedData = [];

  for (let key in data) {
    transformedData.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      location: data[key].location,
      date: data[key].date,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
    })
  }

  return {
    props: {
      events: transformedData
    }
  }
}