import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage() {
  const events = getFeaturedEvents();

  return <div>
    <EventList items={events} />
  </div>
}