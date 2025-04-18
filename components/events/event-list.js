import EventItem from "./event-item";

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => {
        const { title, image, date, location, id } = event;
        return (
          <EventItem
            key={id}
            title={title}
            image={image}
            date={date}
            location={location}
            id={id}
          />
        );
      })}
    </ul>
  );
}
