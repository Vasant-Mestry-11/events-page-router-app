import Link from "next/link";
import classes from './button.module.css'

export default function Button({
  children, href
}) {
  return <Link href={href} className={classes.btn}>{children}</Link>
}