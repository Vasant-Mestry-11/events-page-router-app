import EventContent from "@/components/event-detail/event-content";
import EventLogistic from "@/components/event-detail/event-logistic";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router"

export default function EventId() {
  const router = useRouter();
  const { eventId } = router.query

  const foundEvent = getEventById(eventId);

  if (!foundEvent) {
    return <ErrorAlert><p>No event found!</p></ErrorAlert>;
  }
  const { title, image, date, location, description } = foundEvent;

  return <>
    <EventSummary title={title} />
    <EventLogistic date={date} image={image} imageAlt={title} address={location} />
    <EventContent>{description}</EventContent>
  </>
}