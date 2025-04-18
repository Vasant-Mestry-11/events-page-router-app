import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data"

export default function EventsPage() {

  const allEvents = getAllEvents();

  return <div>
    <EventList items={allEvents}/>
  </div>
}