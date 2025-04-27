import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/helpers/apiUtils";
import Head from "next/head";

export default function FilteredEvents({
  hasError,
  filteredEvents,
  date: {
    year, month
  },
}) {

  let pageHeadData = (
    <Head>
      <title>Filtered Event</title>
      <meta
        name="description"
        content={`A list of filtered event`}
      />
    </Head>
  )

  if (hasError) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter, Please search valid values</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  pageHeadData = (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
    </Head>
  )

  const date = new Date(year, month - 1);

  return (
    <div>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}


export async function getServerSideProps(context) {
  const { slug } = context.params;

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
    return {
      props: {
        hasError: true,
        // notFound: true
        // redirect: {
        //   destination: '/error'
        // }
      }
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  })


  return {
    props: {
      filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }

}