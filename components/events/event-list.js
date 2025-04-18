import EventItem from "./event-item";

export default function EventList({ items }) {
  return <ul>
    {items.map((event) => <EventItem key={event.id} event={event} />)}
  </ul>
}