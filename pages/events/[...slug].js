import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function FilteredEvents() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = slug[0];
  const filteredMonth = slug[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 0 ||
    numMonth > 12
  ) {
    return <p>Invalid filter, Please search valid values</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}
