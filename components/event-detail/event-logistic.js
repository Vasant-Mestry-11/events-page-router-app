import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import classes from "./event-logistic.module.css";
import LogisticItem from "./logistic-item";

export default function EventLogistic({ date, address, image, imageAlt }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticItem>
        <LogisticItem icon={AddressIcon}>
          <address>{formattedAddress}</address>
        </LogisticItem>
      </ul>
    </section>
  );
}
