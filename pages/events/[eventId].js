import EventContent from "@/components/event-detail/event-content";
import EventLogistic from "@/components/event-detail/event-logistic";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router"

export default function EventId() {
  const router = useRouter();
  const { eventId } = router.query

  const foundEvent = getEventById(eventId);

  if (!foundEvent) {
    return <p>No event found!</p>;
  }
  const { title, image, date, location, description } = foundEvent;

  return <>
    <EventSummary title={title} />
    <EventLogistic date={date} image={image} imageAlt={title} address={location} />
    <EventContent>{description}</EventContent>
  </>
}