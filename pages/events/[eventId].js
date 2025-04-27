import EventContent from "@/components/event-detail/event-content";
import EventLogistic from "@/components/event-detail/event-logistic";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/helpers/apiUtils";

export default function EventId({ event }) {
  if (!event) {
    return <ErrorAlert><p>No event found!</p></ErrorAlert>;
  }
  const { title, image, date, location, description } = event;

  return <>
    <EventSummary title={title} />
    <EventLogistic date={date} image={image} imageAlt={title} address={location} />
    <EventContent>{description}</EventContent>
  </>
}

export async function getStaticProps(context) {
  const { eventId } = context.params;
  const event = await getEventById(eventId)
  return {
    props: {
      event
    }
  }
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        eventId: 'e2'
      }
    }
  ];

  return {
    paths,
    fallback: true
  }
}