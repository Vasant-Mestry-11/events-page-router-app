import classes from "./logistic-item.module.css";

export default function LogisticItem({ icon: Icon, children }) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}
