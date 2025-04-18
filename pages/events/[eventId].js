import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router"

export default function EventId() {
  const router = useRouter();
  const { eventId } = router.query

  const foundEvent = getEventById(eventId);

  if (!foundEvent) {
    return null;
  }
  const { title, image, date, location } = foundEvent;

  return <div>
    <h1>{title}</h1>
    <img src={`/${image}`} alt={title} />
    <p>{date}</p>
    <address>{location}</address>
  </div>
}