import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data"

export default function EventsPage() {

  const allEvents = getAllEvents();

  return <div>
    <EventSearch />
    <EventList items={allEvents}/>
  </div>
}