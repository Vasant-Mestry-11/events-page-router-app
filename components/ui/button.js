import Link from "next/link";
import classes from "./button.module.css";

export default function Button({ children, href, onClick }) {
  if (href) {
    return (
      <Link href={href} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}
