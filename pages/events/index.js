import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/router";

export default function EventsPage() {

  const router = useRouter()
  const allEvents = getAllEvents();

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);

  }

  return <>
    <EventSearch onSearch={handleSearch} />
    <EventList items={allEvents} />
  </>
}