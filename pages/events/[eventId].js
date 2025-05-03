import EventContent from "@/components/event-detail/event-content";
import EventLogistic from "@/components/event-detail/event-logistic";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";
import { getEventById, getFeaturedEvents } from "@/helpers/apiUtils";
import Head from "next/head";

export default function EventId({ event }) {
  if (!event) {
    return <div className="center"><p>Loading...</p></div>;
  }
  const { title, image, date, location, description, id } = event;

  return <>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
    </Head>
    <EventSummary title={title} />
    <EventLogistic date={date} image={image} imageAlt={title} address={location} />
    <EventContent>{description}</EventContent>
    <Comments eventId={id} />
  </>
}

export async function getStaticProps(context) {
  const { eventId } = context.params;
  const event = await getEventById(eventId)
  return {
    props: {
      event
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const featuredEvents = await getFeaturedEvents();
  const paths = featuredEvents.map((event) => ({ params: { eventId: event.id } }))
  return {
    paths,
    fallback: true
  }
}