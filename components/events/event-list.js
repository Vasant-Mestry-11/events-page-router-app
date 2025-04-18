import EventItem from "./event-item";
import classes from './event-list.module.css';

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
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
