import Image from "next/image";
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
        <Image src={`/${image}`} alt={imageAlt} width={240} height={240}/>
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
